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
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const isMobile = window.innerWidth <= 768;
  const projects = prj;

  return (
    <div style={{ position: 'relative' }}>
      {!isMobile && <ParticleBackground />}

      <Router>
        <Routes>
          <Route path='/' element={<Home projects={projects} isMobile={isMobile} />} />
          <Route path='/adoptme' element={<ProjectDetails project={projects[0]} />} />
          <Route path='/crafty' element={<ProjectDetails project={projects[1]} />} />
          <Route path='/layale' element={<ProjectDetails project={projects[2]} />} />
          <Route path='/quizzy' element={<ProjectDetails project={projects[3]} />} />
          <Route path='/planmate' element={<ProjectDetails project={projects[4]} />} />
          <Route path='/someday' element={<ProjectDetails project={projects[5]} />} />
          <Route path='/chatify' element={<ProjectDetails project={projects[6]} />} />
          <Route path='/talkyWocky' element={<ProjectDetails project={projects[7]} />} />
          <Route path='/missBugs' element={<ProjectDetails project={projects[8]} />} />
          <Route path='/todos' element={<ProjectDetails project={projects[9]} />} />
          <Route path='/bookworm' element={<ProjectDetails project={projects[10]} />} />
        </Routes>
      </Router>


      <UserMsg />
    </div>
  );
}

export default App;
