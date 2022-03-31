import { useState,useEffect } from 'react'
import {FaUser} from 'react-icons/fa'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login,reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import LeftBanner from '../components/LeftBanner'



function Login(){
    const [formData, setFormData] = useState ({
        email:'',
        password:''
    })

    const {email,password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess,message} = useSelector((state) => state.auth)

    useEffect(() =>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            if(user.role === 'customer'){
                navigate('/')
            }else{
                navigate('/provider/home')
            }
            
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

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if(isLoading) {
        return <Spinner />
    }

    return <>
    <div className='container'>
        <LeftBanner />
        <section className='rightbanner'>
            <div className='logincontainer'>
                <section className='heading'>
                    <p>Please Log In</p>
                </section>
                    <section className='form'>
                        <form onSubmit={onSubmit} >
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
                                <button type='submit' className='btn btn-block'>Submit</button>
                            </div>
                            <div className='form-group'>
                            <ul>
                                <li>
                                    Not a User? <Link to='/Register'>
                                                     <u> Sign up here!</u>  
                                                </Link>
                                </li>
                                <li>
                                     <Link to='/Contact'>
                                        <u> Contact Us!</u>  
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

export default Login