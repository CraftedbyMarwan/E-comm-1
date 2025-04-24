import React, { useState } from "react";
import userlogo from "@/assets/imgs/user-icon.png";
import logo from "@/assets/imgs/logo.png";
import { styles } from "../assets/styles/TopNav";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { rdx_logout } from "../Redux/userSlice";
import { rdx_show_modal } from "../Redux/appSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  const dispatch = useDispatch();
  const { is_loggedin, user } = useSelector((store) => store.userSlice);
  const { items } = useSelector((store) => store.cartSlice);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.body}>
      {/* Logo and mobile menu button */}
      <div className={styles.logoContainer}>
        <button 
          className={styles.mobileMenuButton} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.brandName}>ShopEase</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className={styles.navLinks}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/products">
          Products
        </Link>
        <Link className={styles.link} to="/contact">
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.showMobileMenu : ''}`}>
        <Link className={styles.mobileLink} to="/" onClick={() => setMobileMenuOpen(false)}>
          Home
        </Link>
        <Link className={styles.mobileLink} to="/products" onClick={() => setMobileMenuOpen(false)}>
          Products
        </Link>
        <Link className={styles.mobileLink} to="/contact" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </Link>
      </div>

      {/* Right Section (Cart & User) */}
      <div className={styles.rightSection}>
        {/* Cart */}
        <Link to="/cart" className={styles.cartLink}>
          <div className={styles.cartContainer}>
            <FontAwesomeIcon icon={faCartShopping} />
            {items.length > 0 && (
              <span className={styles.qty}>{items.length}</span>
            )}
          </div>
        </Link>

        {/* User Section */}
        <div className={styles.userSection}>
          {is_loggedin ? (
            <>
              <div className={styles.userInfo}>
                <p className={styles.greeting}>
                  Hi, <span className={styles.userName}>{user.firstName}</span>
                </p>
                <img
                  src={user.image || userlogo}
                  alt="user avatar"
                  className={styles.userAvatar}
                />
              </div>
              <button
                onClick={() => dispatch(rdx_logout())}
                className={`${styles.btn} ${styles.logoutBtn}`}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <div className={styles.guestInfo}>
                <img
                  src={userlogo}
                  alt="guest avatar"
                  className={styles.guestAvatar}
                />
              </div>
              <div className={styles.authButtons}>
                <button
                  onClick={() => dispatch(rdx_show_modal("login"))}
                  className={`${styles.btn} ${styles.loginBtn}`}
                >
                  Login
                </button>
                <button
                  onClick={() => dispatch(rdx_show_modal("register"))}
                  className={`${styles.btn} ${styles.registerBtn}`}
                >
                  Register
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
