import {
  BrowserRouter as Router,
  Routes, Route, Link,
  useParams,
  useNavigate
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

const Menu = () => {
  return (
    <div className='menu'>
      <Link className='route-button' to='/'>Home</Link>
      <Link className='route-button' to='/about'>About me</Link>
      <Link className='route-button' to='/contact'>Contact</Link>
      <ThemeToggle />
    </div>
  )
}


const Footer = () => {
  return (
    <div className='footer'>
      <p>(c) 2025 <a href='https://github.com/amandauppgard'>amandauppgard</a>. All Rights Reserved</p>
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
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  )
}

export default App;