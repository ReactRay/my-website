import './styles/main.scss'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import ParticleBackground from './cmps/ParticleBackground'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UserMsg } from './cmps/UserMsg'
function App() {


  // In App.jsx or index.js


  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);


  return (
    <div style={{ position: 'relative' }}>
      <ParticleBackground color={'#333'} />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <UserMsg />
    </div>
  )
}

export default App
