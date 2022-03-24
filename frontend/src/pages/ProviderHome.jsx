import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import ProviderHeader from '../components/ProviderHeader'

function ProviderHome(){
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.auth)


    useEffect(() => {
        if (!user){
            navigate('/login')
        }
    }, [user,navigate])

    return (
        <>
        <ProviderHeader />
        <div className='container'>Service Provider Home page</div>
        
        </>
    )
}

export default ProviderHome