import { SystemSecurityUpdate } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './index.css'



function LoginPage(props) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [passWord, setPassword] = useState('');
    const [newUser, setNewUser] = useState('');



    function LoginCheck() {
        const user = {
            username: userName,
            password: passWord,
        };


        axios.post('/login-page', user
        )
            .then(function (response) {
                setNewUser(user.username)

            })
            .catch(function (error) {
                debugger;
                console.log(error);
            });

        if (newUser === "admin") {
            return navigate("/admin-page")
        }





    }
    return (
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                <div className='form-group'>
                    <label htmlFor="username">Username:</label>
                    <input name="username" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input name="password" id="password" value={passWord} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>

                    <button onClick={LoginCheck} >Send</button>
                </div>

            </div>
        </form>
    )
}

export default LoginPage
