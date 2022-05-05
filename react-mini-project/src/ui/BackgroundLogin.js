

export const BackgroundLogin = (props) => {
    return (
        <div className="h-screen  bk-form w-full  bg-[url('./img/bk-login.png')] bg-contain bg-center flex justify-center align-center bg-no-repeat" >
            {props.children}

        </div >
    );
}


