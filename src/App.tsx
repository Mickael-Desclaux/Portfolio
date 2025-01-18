import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import NavbarDefault from './components/Navbar/Navbar'
import ProjectsPage from './pages/Projects/ProjectsPage'
import { useContext } from 'react'
import { DarkModeContext } from './contexts/DarkModeProvider'
import Footer from './components/Footer/Footer'


function App() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark-theme' : ''}>
      <NavbarDefault />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
