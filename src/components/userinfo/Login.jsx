// import logo from "@/assets/imgs/logo.png";
// import { styles } from "../../assets/styles/Login";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { rdx_show_modal } from "../../Redux/appSlice";
// import { rdx_login } from "../../Redux/userSlice";
// import { toast, Slide } from "react-toastify";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { rdx_set_loading } from "../../Redux/settingsSlice";

// export default function Login() {
//   const dispatch = useDispatch();

//   const [username, setUsername] = useState("");
//   const [password, setpassword] = useState("");
//   const [showpass, setShowpass] = useState(false);
//   const handle_showPass = (e) => setShowpass(!showpass);

//   const handleLogin = async () => {
//     if (username == "" || password == "") {
//       return toast.error("Fill in the blanks!", {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Slide,
//       });
//     }

//     const jsonData = JSON.stringify({ username, password });

//     const api = "https://dummyjson.com/auth/login";
//     const init = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: jsonData,
//     };

//     dispatch(rdx_set_loading(true));

//     const data = await fetch(api, init)
//       .then((res) => res.json())
//       .then((data) => data);
//     if (data.id) {
//       dispatch(rdx_login(data));
//       dispatch(rdx_show_modal(null));
//       setTimeout(() => {
//         dispatch(rdx_set_loading(false));
//       }, 100);
//     } else {
//       toast.error(data.message, {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Slide,
//       });
//       dispatch(rdx_set_loading(false));
//     }
//   };

//   return (
//     <div className={styles.regBox}>
//       <div className={styles.regBody}>
//         <div className="flex justify-center">
//           <div className="w-fit rounded-full">
//             <img src={logo} alt="logo" width={256} />
//           </div>
//         </div>

//         <div className="overflow-auto p-2">
//           <div className={styles.inputBox}>
//             <div className="rounded-md border border-[#e0e0e0] bg-white py-3 px-4 flex items-center gap-3">
//               <input
//                 type="text"
//                 name="f_name"
//                 id="f_name"
//                 placeholder="Username"
//                 className={styles.username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 value={username}
//               />
//             </div>
//           </div>

//           <div className={`flex items-center justify-between relative`}>
//             <input
//               type={showpass ? "text" : "password"}
//               name="pass"
//               id="pass"
//               placeholder="Password"
//               className={styles.pass}
//               onChange={(e) => setpassword(e.target.value)}
//               value={password}
//             />
//             <p
//               onClick={handle_showPass}
//               className="absolute right-5 cursor-pointer hover:text-gray-400"
//             >
//               {showpass ? (
//                 <FontAwesomeIcon icon={faEye} />
//               ) : (
//                 <FontAwesomeIcon icon={faEyeSlash} />
//               )}
//             </p>
//           </div>

//           <div className="flex justify-center mt-6 gap-6">
//             <button onClick={handleLogin} className={styles.createBtn}>
//               Log in
//             </button>
//             <button
//               onClick={() => dispatch(rdx_show_modal(null))}
//               className={styles.cancelBtn}
//             >
//               Cancel
//             </button>
//           </div>

//           <div className={`flex justify-center mt-24 gap-6`}>
//             Don't have an account?{" "}
//             <span
//               onClick={() => dispatch(rdx_show_modal("register"))}
//               className="cursor-pointer text-blue-500 hover:border-b-black hover:text-gray-400"
//             >
//               Register here
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import logo from "@/assets/imgs/logo.png";
import { styles } from "../../assets/styles/Login";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { rdx_show_modal } from "../../Redux/appSlice";
import { rdx_login } from "../../Redux/userSlice";
import { toast, Slide } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { rdx_set_loading } from "../../Redux/settingsSlice";

export default function Login() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [showpass, setShowpass] = useState(false);
  const handle_showPass = (e) => setShowpass(!showpass);

  const handleLogin = async () => {
    if (username == "" || password == "") {
      return toast.error("Fill in the blanks!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }

    const jsonData = JSON.stringify({ username, password });

    const api = "https://dummyjson.com/auth/login";
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: jsonData,
    };

    dispatch(rdx_set_loading(true));

    const data = await fetch(api, init)
      .then((res) => res.json())
      .then((data) => data);
    if (data.id) {
      dispatch(rdx_login(data));
      dispatch(rdx_show_modal(null));
      setTimeout(() => {
        dispatch(rdx_set_loading(false));
      }, 100);
    } else {
      toast.error(data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      dispatch(rdx_set_loading(false));
    }
  };

  return (
    <div className={styles.regBox}>
      <div className={styles.regBody}>
        <div className="flex justify-center mb-6">
          <div className="w-fit rounded-full">
            <img src={logo} alt="logo" className="w-32 md:w-48" />
          </div>
        </div>

        <div className="overflow-auto p-2">
          <div className={styles.inputBox}>
            <div className="rounded-md border border-[#e0e0e0] bg-white py-3 px-4 flex items-center gap-3">
              <input
                type="text"
                name="f_name"
                id="f_name"
                placeholder="Username"
                className={styles.username}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
          </div>

          <div className={`flex items-center justify-between relative`}>
            <input
              type={showpass ? "text" : "password"}
              name="pass"
              id="pass"
              placeholder="Password"
              className={styles.pass}
              onChange={(e) => setpassword(e.target.value)}
              value={password}
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

          <div className="flex flex-col sm:flex-row justify-center mt-6 gap-3">
            <button onClick={handleLogin} className={styles.createBtn}>
              Log in
            </button>
            <button
              onClick={() => dispatch(rdx_show_modal(null))}
              className={styles.cancelBtn}
            >
              Cancel
            </button>
          </div>

          <div className={`flex flex-wrap justify-center mt-8 gap-1`}>
            Don't have an account?{" "}
            <span
              onClick={() => dispatch(rdx_show_modal("register"))}
              className="cursor-pointer text-blue-500 hover:border-b-black hover:text-gray-400"
            >
              Register here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
