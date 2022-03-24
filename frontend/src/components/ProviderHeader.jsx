import {FaSignOutAlt} from 'react-icons/fa'
import{useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import {HiStar} from 'react-icons/hi'


function ProviderHeader() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className='navlogo'>
            Hire Five Star <br />
                <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
            </div>
            <ul>
                <li>
                    <button className ='btn' onClick = {onLogout}>
                        <FaSignOutAlt />Logout
                    </button>
                </li>   
            </ul>
        </header>
    ) 
    
}

export default ProviderHeader