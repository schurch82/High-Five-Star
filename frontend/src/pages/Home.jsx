import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Home(){
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.auth)


    useEffect(() => {
        if (!user){
            navigate('/login')
        }
    }, [user,navigate])

    return <div>Home</div>
}

export default Home