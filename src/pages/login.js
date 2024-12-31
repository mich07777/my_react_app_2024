import React,{useState} from "react";

const LoginPage = () => {

    let [userName,updateUserName] = useState("");
    let [passWord,updatePassword] = useState("");

    const handleUserName = (event) => {
        updateUserName(event.target.value);
    }

    const handlePassword = (event) => {
        updatePassword(event.target.value);
    }

    const login = ( ) =>{
        let data = {
            username: userName,
            password:passWord
        }

        console.log(data);
    }

 return(
    <div>
        <lable id="loginHeading">Login Page</lable>
        <br></br>
        <input type="text" placeholder="Please Enter UserName" onChange={handleUserName} />
        <br></br>
        <input type="password" placeholder="Please Enter Password" onChange={handlePassword}/>
        <br></br>
        <button onClick={() => login()}>Login</button>

        <p>The User Name is{userName}</p>
        <p>The Password is{passWord}</p>
    </div>
 )
}

export default LoginPage;