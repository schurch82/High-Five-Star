import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'

function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element = {<Home />} /> 
          <Route path='/Login' element = {<Login />} />
          <Route path='/Register' element = {<Register />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
