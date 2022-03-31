import { useState,useEffect } from 'react'
import {FaUser} from'react-icons/fa'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register,reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import LeftBanner from '../components/LeftBanner'

function Register(){
    const [formData, setFormData] = useState ({
        username:'',
        email:'',
        password:'',
        password2:'',
        role:''
    })

    const {username,email,password,password2,role} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess,message} = useSelector((state) => state.auth)

    useEffect(() =>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault()
        if(password !== password2){
            toast.error('Passwords do not match')
        }else{
            const userData = {
                username,
                email,
                password,
                role
            }

            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }

    return <>
    <div className='container'>
    <LeftBanner/>
    <section className='rightbanner'>
        <div className='registercontainer'>
            <section className='heading'>
                <h1> 
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>
            <section className='form'>
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
                        <select name="role" id="role" value = {role} onChange={onChange}>
                            <option value="">--Please Choose and option--</option>
                            <option value="customer">Customer</option>
                            <option value="service provider">Service Provider</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                    <div className='form-group'>
                        <ul>
                            <li>
                                 Already have an accoutn?<Link to='/Login'>
                                                            <u>Login</u>  
                                                        </Link>
                            </li>
                        </ul>
                    </div>
                </form>
            </section>
        </div>
    </section>
    </div>
    </>
}

export default Register