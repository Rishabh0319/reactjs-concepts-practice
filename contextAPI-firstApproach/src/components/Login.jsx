import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {

    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const sendDate = (e) => {
       e.preventDefault();
       setUser({username,password});
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
            <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={sendDate}>Submit</button>
        </div>
    )
}

export default Login;