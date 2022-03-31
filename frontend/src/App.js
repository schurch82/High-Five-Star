import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProviderHome from './pages/ProviderHome'
import ContactPage from './pages/ContactPage'


function App() {
  return (
    <>
    <Router>
      
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/provider/home' element = {<ProviderHome/>} />
          <Route path='/Login' element = {<Login />} />
          <Route path='/Register' element = {<Register />} />
          <Route path='/Contact' element= {<ContactPage/>}/>
        </Routes>
      
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
