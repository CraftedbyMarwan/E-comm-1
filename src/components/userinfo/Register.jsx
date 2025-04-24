import React from "react";
import logo from "@/assets/imgs/logo.png";
import { styles } from "../../assets/styles/Register";
import { useDispatch } from "react-redux";
import { rdx_show_modal } from "../../Redux/appSlice";
import { useState } from "react";
import FnameValidator from "../../assets/auth/FnameValidator";
import LnameValidator from "../../assets/auth/LnameValidator";
import EmailValidator from "../../assets/auth/EmailValidator";
import PassValidator from "../../assets/auth/PassValidator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showpass, setShowpass] = useState(false);

  const handle_first_name_changed = (e) =>
    setFname(e.target.value.toUpperCase().trim());
  const handle_last_name_changed = (e) =>
    setLname(e.target.value.toUpperCase().trim());
  const handle_email_changed = (e) => setEmail(e.target.value);
  const handle_password_changed = (e) => setPassword(e.target.value);
  const handle_password_confirmation_changed = (e) =>
    setPasswordConfirmation(e.target.value);
  const handle_showPass = (e) => setShowpass(!showpass);

  const dispatch = useDispatch();

  return (
    <div className={styles.regBox}>
      <div className={styles.regBody}>
        <div className="flex justify-center mb-6">
          <div className="w-fit rounded-full">
            <img src={logo} alt="logo" className="w-20 md:w-24" />
          </div>
        </div>

        <div className="overflow-auto p-2">
          <div className={styles.inputBox}>
            <div className="rounded-md border border-[#e0e0e0] bg-white py-3 px-4 flex items-center gap-3">
              <input
                value={fname}
                onChange={handle_first_name_changed}
                type="text"
                name="f_name"
                id="f_name"
                placeholder="First Name"
                className="w-full text-base font-medium text-[#6B7280] outline-none"
              />
            </div>
            <small>
              <FnameValidator fname={fname} />
            </small>
          </div>

          <div className={styles.inputBox}>
            <div className="rounded-md border border-[#e0e0e0] bg-white py-3 px-4 flex items-center gap-3">
              <input
                value={lname}
                onChange={handle_last_name_changed}
                type="text"
                name="l_name"
                id="l_name"
                placeholder="Last Name"
                className="w-full text-base font-medium text-[#6B7280] outline-none"
              />
            </div>
            <small>
              <LnameValidator lname={lname} />
            </small>
          </div>

          <div className={styles.inputBox}>
            <div className="rounded-md border border-[#e0e0e0] bg-white py-3 px-4 flex items-center gap-3">
              <input
                value={email}
                onChange={handle_email_changed}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full text-base font-medium text-[#6B7280] outline-none"
              />
            </div>
            <small>
              <EmailValidator email={email} />
            </small>
          </div>

          <div className="flex flex-col mb-6">
            <div className={`${styles.inputBox} flex gap-4`}>
              <div className="flex items-center justify-between relative">
                <input
                  value={password}
                  onChange={handle_password_changed}
                  type={showpass ? "text" : "password"}
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                <p
                  onClick={handle_showPass}
                  className="absolute right-5 cursor-pointer hover:text-gray-400"
                >
                  {showpass ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </p>
              </div>

              <div className="flex items-center justify-between relative">
                <input
                  value={passwordConfirmation}
                  onChange={handle_password_confirmation_changed}
                  type={showpass ? "text" : "password"}
                  name="confirm_pass"
                  id="confirm_pass"
                  placeholder="Confirm Password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {/* <p
                  onClick={handle_showPass}
                  className="absolute right-5 cursor-pointer hover:text-gray-400"
                >
                  {showpass ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </p> */}
              </div>
            </div>

            <small>
              <PassValidator
                password={password}
                passwordConfirmation={passwordConfirmation}
              />
            </small>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-3">
            <button className={styles.createBtn}>Create Account</button>
            <button
              onClick={() => dispatch(rdx_show_modal(null))}
              className={styles.cancelBtn}
            >
              Cancel
            </button>
          </div>

          <div className={`flex flex-wrap justify-center mt-6 gap-1`}>
            Already have an account?{" "}
            <span
              onClick={() => dispatch(rdx_show_modal("login"))}
              className="cursor-pointer text-blue-500 hover:border-b-black hover:text-gray-400"
            >
              Login here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
