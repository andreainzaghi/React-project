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
    inputValue: {
      className: "input-login",
      value: inputLogin.name,
      type: "email",
      placeholder: "Enter your username",
      id: "username",
    },
  };

  const passwordInput = {
    className: "box-login",
    inputValue: {
      className: "input-login",
      value: inputLogin.password,
      type: "password",
      placeholder: "Enter your password",
      id: "password",
    },
  };

  const handleInputValue = (target, value) => {
    setInputLogin({ ...inputLogin, [target]: value });
  };

  function login(e) {
    e.preventDefault();
    usersList.forEach((user) => {
      if (validateUsername(inputLogin.username) === null) {
        setErrorMessage("Username is invalid!");
      } else if (inputLogin.password === "") {
        setErrorMessage("Password is invalid!");
      } else {
        validateCredential(user);
      }
    });
  }

  function validateCredential(user) {
    if (
      user.mail.match(inputLogin.username) &&
      user.password.match(inputLogin.password)
    ) {
      navigate("/dashboard");
    }
  }

  function validateUsername(username) {
    //check username with Regex
    return String(username)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  return (
    <BackgroundLogin>
      <form
        onSubmit={login}
        className="flex justify-center w-full h-screen align-center place-items-center"
        id="sforndoform"
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

          <div>
            <p className="error"> {errorMessage} </p>
          </div>
        </div>
      </form>
    </BackgroundLogin>
  );
};
