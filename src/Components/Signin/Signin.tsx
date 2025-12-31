import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css'
interface props {
    email: string;
    password: string;
}

const Signin = () => {
    const [login, setLogin] = useState<props>({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!login.email.trim() || !login.password.trim()) {
            alert("Enter values");
            return;
        }
        const out = await axios.get('http://localhost:8000/users', {
            params: { email: login.email, password: login.password }

        })
        if (out.data.length > 0) {
            navigate('/home');
        } else {
            alert("Wrong Login credentials");
        }

        setLogin({ email: "", password: "" });
        <Link to='/home' replace={true}></Link>
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogin((prev) => ({ ...prev, [name]: value }))
    }


    return (
        <div className='outer'>

            <form className='form' onSubmit={handleSubmit}>
                <h2>Sign in to continue</h2>
                <input className='input-field' type='text' name='email' value={login.email} onChange={handleChange} placeholder='Enter Email'></input>
                <br />
                <input className='input-field' type='password' name='password' value={login.password} onChange={handleChange} placeholder='Enter Password'></input>
                <br />
                <button className='btn' type='submit'>Login</button>
                <div className='register'>
                    <Link to='/register' replace={true}>   <a href='#' >New User? Register Here</a></Link>
                </div>
            </form>

        </div>

    )
}

export default Signin