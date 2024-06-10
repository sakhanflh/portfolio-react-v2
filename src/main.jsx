import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/homePage'
import ProjectsPage from './pages/projectsPage'
import CertificatePage from './pages/certificatePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/certificates' element={<CertificatePage/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
