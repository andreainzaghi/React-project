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
      required: true,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
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
      required: true,
    },
  };

  const handleInputValue = (target, value) => {
    setInputLogin({ ...inputLogin, [target]: value });
  };

  function login(e) {
    e.preventDefault();

    if (checkUsernameAndPassword()) {
      navigate("/dashboard");
    } else {
      setErrorMessage(
        "username and / or password are incorrect or not filled in"
      );
    }
  }

  const checkUsernameAndPassword = () => {
    if (
      usersList.find(
        (user) =>
          user.mail.match(inputLogin.username) &&
          user.password.match(inputLogin.password)
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

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

          <div className="h-5">
            <p className="text-xl font-semibold text-red-600">{errorMessage}</p>
          </div>
        </div>
      </form>
    </BackgroundLogin>
  );
};
