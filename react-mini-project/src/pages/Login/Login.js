import { BackgroundLogin } from "../../ui/BackgroundLogin";

import { useState } from "react";
import { Outlet, Link, useRoutes, Route, Router, Navigate } from "react-router-dom";
import { Dashboard } from "../Dashboard";
import { useNavigate } from "react-router-dom";
import usersList from "./mockdata/userlist";
export const Login = () => {
    const navigate = useNavigate();
    // const usersList = [
    //     {
    //         mail: "taher@sysdata.it",
    //         password: "password",
    //         id: "01Axsert",
    //     },
    //     {
    //         mail: "andrea@sysdata.it",
    //         password: "password",
    //         id: "4Ecfg35",
    //     },
    //     {
    //         mail: "alberto@sysdata.it",
    //         password: "password",
    //         id: "Ait75!ssD",
    //     },
    // ];

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const handleName = (event) => {
        setName(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    function Login(event) {

        usersList.forEach((user) => {

            if (user.mail.match(name) && user.password.match(password)) {
                console.log('entrato')
                navigate("/dashboard");
            }

        });

    }

    return (
        <BackgroundLogin>
            <form className="flex justify-center align-center  h-screen place-items-center w-full" id="sforndoform"
            >

                <div className="grid w-full place-items-center">
                    <div id="box-username" className="flex w-2/5 mb-4 border-2 border-solid rounded-full border-sky-500">
                        <i className="p-6 bg-white rounded-l-full fa-solid fa-user"></i>
                        <input className="w-full h-16 rounded-r-full outline-none" value={name} onChange={handleName} type="email" placeholder="Enter your username" id="user"
                        />
                    </div>

                    <div id="box-password" className="flex w-2/5 mb-4 border-2 border-solid rounded-full border-sky-500">
                        <i className="p-6 bg-white rounded-l-full fa-solid fa-lock"></i>
                        <input className="w-full h-16 rounded-r-full outline-none" value={password} onChange={handlePassword} type="password" placeholder="Enter your password" id="psw"
                        />
                    </div>

                    <div className="flex w-2/5 bg-[#9ed0ffeb] text-white rounded-full border-solid border-2 border-sky-500">
                        <button className="w-full h-16 rounded-full" type="submit" onClick={Login}>Sign in</button>
                    </div>

                    <div id="error" className="h-1/5">

                    </div>
                </div>
            </form>
        </BackgroundLogin>


    );
}


