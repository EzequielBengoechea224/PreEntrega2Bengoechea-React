import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

//Pages
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import DrinkPage from './pages/DrinkPage/DrinkPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='body'>
        <Header />
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/drink/:id' element={<DrinkPage />}/>
      </Routes>

      <Header> 
        <p style={{color:"white"}}>Gracias por su visita</p> 
      </Header>
    </Router>
  )
}

export default App
