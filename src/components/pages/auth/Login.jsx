import React, {useContext, useRef} from 'react';
import axios from 'axios';
import './login.css';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import toast from 'react-hot-toast';
import {AuthContext} from '../../../context/AuthContext';
import {loginCall} from '../../../apiCalls';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const userInput = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.current.value) return toast.error('Username is required');
    if (!password.current.value) return toast.error('Password is required');

    const user = {
      userInput: userInput.current.value,
      password: password.current.value,
    }

    loginCall(user, dispatch, navigate.push('/'));

  }
    return (
        <>
    <div class="login-container">
     <div class="login-content">
        <h3>Login Account</h3>
        <form onSubmit={handleSubmit}  noValidate autoComplete="off">
            <div className="inputBox">
                <label for="">Username</label>
                <input className="input" type="text" inputRef={userInput} id="name"  required />
            </div>
            <div class="inputBox">
                <label for="">Password</label>
                <input className="input" type="password" inputRef={password} id="password" required />
            </div>
            <div className="inputBox">
                <p><a href="">Forgot Password?</a></p>
            </div>
            
                <button className="button" type="submit">LOGIN</button>

                <p>Don't Have Account?<a href="/auth/register">Sign Up</a></p>

        
        </form>
     </div>
  </div>
        
        </>
    )
}

export default Login;
