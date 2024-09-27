import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import NavbarDefault from './components/Navbar/Navbar'
import ProjectsPage from './pages/Projects/ProjectsPage'
import ClassicResumePage from './pages/ClassicResume/ClassicResumePage'
import ContactPage from './pages/Contact/ContactPage'


function App() {

  return (
    <>
    <NavbarDefault/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ClassicResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
