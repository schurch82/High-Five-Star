import { useState,useEffect } from 'react'
import {FaUser} from'react-icons/fa'
import React from 'react'

function Register(){
    const [formData, setFormData] = useState ({
        username:'',
        email:'',
        password:'',
        password2:'',
        role:''
    })

    const {username,email,password,password2,role} = formData

    const onChange = (e) => {
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault()
    }


    return <>
        <section className='heading'>
            <h1> 
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>
            <form onSubmit={onSubmit} >
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    id='username'
                    name='username' 
                    value={username} 
                    placeholder='Enter your username' 
                    onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input 
                    type="email" 
                    className="form-control" 
                    id='email'
                    name='email' 
                    value={email} 
                    placeholder='Enter your email address' 
                    onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input 
                    type="password" 
                    className="form-control" 
                    id='password'
                    name='password' 
                    value={password} 
                    placeholder='Enter password' 
                    onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input 
                    type="password" 
                    className="form-control" 
                    id='password2'
                    name='password2' 
                    value={password2} 
                    placeholder='confirm password' 
                    onChange={onChange}/>
                </div>
                <div className="form-group">
                    <select name="role" id="role" onChange={onChange}>
                        <option value="">--Please Choose and option--</option>
                        <option value="Customer">Customer</option>
                        <option value="Service Provider">Service Provider</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Submit</button>
                </div>
            </form>
        <section className='form'>

        </section>
    </>
}

export default Register