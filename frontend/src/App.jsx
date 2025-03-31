import './styles/main.scss'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import ParticleBackground from './cmps/ParticleBackground'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UserMsg } from './cmps/UserMsg'
import { ProjectDetails } from './Pages/ProjectDetails'
function App() {


  // In App.jsx or index.js


  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);


  const projects = [
    {
      id: '/someday',
      name: "Someday (Monday Clone)",
      description: "A task management app inspired by Monday.com. Features Kanban boards, draggable tasks, and group management.",
      technologies: ["React", "Express", "MongoDB"],
      img: "/someday.png",
      github: 'https://github.com/ReactRay/SomeDay',
      demo: 'https://someday-n1ze.onrender.com',
      videoId: '742b46be33484fa8880d1c4afe75181b',
      imgArr: ['https://res.cloudinary.com/danlxus36/image/upload/v1743385875/someday3_mkqprj.png', 'https://res.cloudinary.com/danlxus36/image/upload/v1743385875/someday1_jtut0n.png', 'https://res.cloudinary.com/danlxus36/image/upload/v1743385875/someday4_bnzz8p.png']
    },
    {
      id: '/missBugs',
      name: "MissBugs",
      description: "A bug tracking system where users can report, update, and manage bugs. Full CRUD with a clean UI.",
      technologies: ["React", "Express", "MongoDB"],
      img: "/bugs1.png",
      github: 'https://github.com/ReactRay/bug-report-project',
      demo: 'https://bug-report-project.onrender.com',
      videoId: 'ac20b5837e1a41679e2cb40cf75130cb',
      imgArr: ['https://res.cloudinary.com/danlxus36/image/upload/v1743385876/bugs1_c8cocn.png', 'https://res.cloudinary.com/danlxus36/image/upload/v1743385876/bugs3_ovnqwy.png', 'https://res.cloudinary.com/danlxus36/image/upload/v1743385875/bugs2_yptvdd.png']

    },
    {
      id: '/todos',
      name: "Todos",
      description: "A simple todo app with full CRUD functionality. Built to help users stay productive and organized.",
      technologies: ["React"],
      img: "/todo.png",
      github: 'https://github.com/ReactRay/RM-TODOS',
      demo: 'https://reactray.github.io/RM-TODOS/',
      videoId: '7b718b62ec1848f0918033f026ee61b9',
      imgArr: ['https://res.cloudinary.com/danlxus36/image/upload/v1743385875/todo1_o0xm00.png', 'https://res.cloudinary.com/danlxus36/image/upload/v1743385875/todo3_wewj8w.png', 'https://res.cloudinary.com/danlxus36/image/upload/v1743385875/todo2_ojvlfr.png']


    }
  ];


  return (
    <div style={{ position: 'relative' }}>
      <ParticleBackground color={'#333'} />

      <Router>
        <Routes>

          <Route path='/' element={<Home projects={projects} />} />
          <Route path='/someday' element={<ProjectDetails project={projects[0]} />} />
          <Route path='/missBugs' element={<ProjectDetails project={projects[1]} />} />
          <Route path='/todos' element={<ProjectDetails project={projects[2]} />} />
        </Routes>
      </Router>
      <UserMsg />
    </div>
  )
}

export default App
