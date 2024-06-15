import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/homePage'
import ProjectsPage from './pages/projectsPage'
import CertificatePage from './pages/certificatePage'
import SumbitPage from './pages/sumbitPage'
import AboutMePage from './pages/aboutPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/certificates' element={<CertificatePage/>}/>
        <Route path='/sumbit' element={<SumbitPage/>}/>
        <Route path='/aboutme' element={<AboutMePage/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
