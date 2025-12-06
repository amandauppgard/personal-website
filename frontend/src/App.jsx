import {
  BrowserRouter as Router,
  Routes, Route,
  NavLink
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import Guestbook from './components/Guestbook'

const Menu = () => {
  return (
    <div className='menu'>
      <NavLink className='route-button' to='/'>Home</NavLink>
      <NavLink className='route-button' to='/about'>About me</NavLink>
      <NavLink className='route-button' to='/guestbook'>Guestbook</NavLink>
      <NavLink className='route-button' to='/contact'>Contact</NavLink>
      <ThemeToggle />
    </div>
  )
}


const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2025 <a href='https://github.com/amandauppgard'>amandauppgard</a>. All Rights Reserved</p>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <div className='wrapper'>
      <h1>amandauppgard</h1>
      <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/guestbook' element={<Guestbook/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  )
}

export default App;