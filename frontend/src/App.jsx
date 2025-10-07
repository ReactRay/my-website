import './styles/main.scss'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { UserMsg } from './cmps/UserMsg'
import { prj } from './services/projects'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useMemo } from 'react'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true })
  }, [])

  const isMobile = useMemo(() => window.innerWidth <= 768, [])
  const projects = useMemo(() => prj, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home projects={projects} isMobile={isMobile} />} />
      </Routes>
      <UserMsg />
    </Router>
  )
}

export default App
