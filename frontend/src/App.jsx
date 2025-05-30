import './styles/main.scss'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import ParticleBackground from './cmps/ParticleBackground'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UserMsg } from './cmps/UserMsg'
import { ProjectDetails } from './Pages/ProjectDetails'
import { prj } from './services/projects'
function App() {


  // In App.jsx or index.js


  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const isMobile = window.innerWidth <= 768; // Simple mobile check


  const projects = prj


  return (
    <div style={{ position: 'relative' }}>
      {!isMobile && <ParticleBackground />}

      <Router>
        <Routes>

          <Route path='/' element={<Home projects={projects} isMobile={isMobile} />} />
          <Route path='/crafty' element={<ProjectDetails project={projects[0]} />} />
          <Route path='/layale' element={<ProjectDetails project={projects[1]} />} />
          <Route path='/quizzy' element={<ProjectDetails project={projects[2]} />} />
          <Route path='/planmate' element={<ProjectDetails project={projects[3]} />} />
          <Route path='/someday' element={<ProjectDetails project={projects[4]} />} />
          <Route path='/chatify' element={<ProjectDetails project={projects[5]} />} />
          <Route path='/talkyWocky' element={<ProjectDetails project={projects[6]} />} />
          <Route path='/missBugs' element={<ProjectDetails project={projects[7]} />} />
          <Route path='/todos' element={<ProjectDetails project={projects[8]} />} />
        </Routes>
      </Router>
      <UserMsg />
    </div>
  )
}

export default App
