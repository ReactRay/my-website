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


  const projects = prj


  return (
    <div style={{ position: 'relative' }}>
      <ParticleBackground color={''} />

      <Router>
        <Routes>

          <Route path='/' element={<Home projects={projects} />} />
          <Route path='/quizzy' element={<ProjectDetails project={projects[0]} />} />
          <Route path='/planmate' element={<ProjectDetails project={projects[1]} />} />
          <Route path='/someday' element={<ProjectDetails project={projects[2]} />} />
          <Route path='/chatify' element={<ProjectDetails project={projects[3]} />} />
          <Route path='/talkyWocky' element={<ProjectDetails project={projects[4]} />} />
          <Route path='/missBugs' element={<ProjectDetails project={projects[5]} />} />
          <Route path='/todos' element={<ProjectDetails project={projects[6]} />} />
        </Routes>
      </Router>
      <UserMsg />
    </div>
  )
}

export default App
