import React, {useRef} from 'react';
import axios from 'axios';
import './register.css';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!username.current.value) return toast.error('Username is required');
      if (!email.current.value) return toast.error('Email address is required');
      if (!password.current.value) return toast.error('Password is required');
  
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      } 
  
      try {
        let res = await axios.post('http://localhost:8000/api/v1/auth/register', user);
        if(res.data.success) toast.success(res.data.msg);
        navigate.push('/verify-user');
      }catch(err) { 
        if(!err.response.data.success) return toast.error(err.response.data.msg);
      }
  
    }


return (
    <>
<div class="register-container">
  <div class="register-content">
        <h3>Welcome To <span className="header-title">libManager</span></h3>
        <p>Create Your Account</p>
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className="inputBox">
        <label for="">Username</label>
        <input type="text" inputRef={username} id="username" className="input"  required />
        </div>

        <div className="inputBox">
        <label for="">Email</label>
        <input type="email" inputRef={email} id="email" className="input"  required />
        </div>

        <div className="inputBox">
        <label for="">Password</label>
        <input type="password" inputRef={password} id="password" className="input" placeholder="" required />
        </div>

        <p> Already Have an Account?<a href="/auth/login">Login</a></p>

        <button className="button" type="submit">CONTINUE</button>
    </form>
  </div>
</div>
</>
)
}

export default Register;