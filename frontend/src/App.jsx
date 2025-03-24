import './styles/main.scss'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'

function App() {

  return (
    <Router>
      <Routes >
        <Route path='/' element={<Home />} />
        {/*something */}
      </Routes>
    </Router>
  )
}

export default App
