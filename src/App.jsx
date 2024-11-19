import { useEffect } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App
