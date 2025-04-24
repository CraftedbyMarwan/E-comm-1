import { Link } from "react-router";
import { styles } from "../assets/styles/Footer";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.section}>
            <h3 className={styles.heading}>ShopEase</h3>
            <p className={styles.text}>
              Your one-stop shop for quality products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.subHeading}>Quick Links</h4>
            <ul className={styles.list}>
              <li><Link to="/" className={styles.link}>Home</Link></li>
              <li><Link to="/products" className={styles.link}>Shop</Link></li>
              <li><Link to="/contact" className={styles.link}>Contact Us</Link></li>
              <li><Link to="/faq" className={styles.link}>FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className={styles.subHeading}>Customer Service</h4>
            <ul className={styles.list}>
              <li><a href="#" className={styles.link}>My Account</a></li>
              <li><a href="#" className={styles.link}>Order Tracking</a></li>
              <li><a href="#" className={styles.link}>Wishlist</a></li>
              <li><a href="#" className={styles.link}>Shipping Policy</a></li>
              <li><a href="#" className={styles.link}>Returns & Refunds</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={styles.subHeading}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.listItem}>
                <span className={styles.text}>123 Street, City, Country</span>
              </li>
              <li className={styles.listItem}>
                <a href="tel:+1234567890" className={styles.link}>+1 (234) 567-890</a>
              </li>
              <li className={styles.listItem}>
                <a href="mailto:info@ShopEase.com" className={styles.link}>info@ShopEase.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h4 className={styles.subHeading}>Subscribe to the Newsletter</h4>
          <div className={styles.inputContainer}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className={styles.input}
            />
            <button className={styles.button}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <a href="#" className={styles.legalLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;