import { BackgroundLogin } from "../../ui/BackgroundLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersList from "./mockdata/userlist";
import { CustomInput } from "../../components/CustomInput/CustomInput";

export const Login = () => {
  const navigate = useNavigate();

  const [inputLogin, setInputLogin] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const usernameLogin = {
    className: "box-login",
    inputField: {
      className: "input-login",
      value: inputLogin.name,
      type: "email",
      placeholder: "Enter your username",
      id: "username",
      required: true,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
    },
  };

  const passwordInput = {
    className: "box-login",
    inputField: {
      className: "input-login",
      value: inputLogin.password,
      type: "password",
      placeholder: "Enter your password",
      id: "password",
      required: true,
    },
  };

  const handleInputValue = (target, value) => {
    setInputLogin({ ...inputLogin, [target]: value });
  };

  const login = (event) => {
    event.preventDefault();

    if (checkUsernameAndPassword()) {
      setErrorMessage("");
      window.sessionStorage.setItem("isLogged", true);
      navigate("/dashboard");
    } else {
      setErrorMessage("Username and/or Password are incorrect");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const checkUsernameAndPassword = () => {
    if (
      usersList.find(
        (user) =>
          user.mail === inputLogin.username &&
          user.password === inputLogin.password
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (window.sessionStorage.getItem("isLogged")) {
    window.sessionStorage.clear();
  }

  return (
    <BackgroundLogin>
      {errorMessage === "" ? null : (
        <div role="alert" className="absolute right-3 top-5">
          <div className="px-4 py-2 font-bold text-white bg-red-500 rounded-t animate-pulse">
            Danger
          </div>
          <div className="px-4 py-3 text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b">
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form
        onSubmit={login}
        className="flex justify-center w-full h-screen align-center place-items-center"
      >
        <div className="grid w-full place-items-center">
          <CustomInput
            customInput={usernameLogin}
            onHandleInput={handleInputValue}
          />

          <CustomInput
            customInput={passwordInput}
            onHandleInput={handleInputValue}
          />

          <div className="flex w-2/5 bg-[#9ed0ffeb] text-white rounded-full border-solid border-2 border-sky-500">
            <button className="w-full h-16 rounded-full" type="submit">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </BackgroundLogin>
  );
};
