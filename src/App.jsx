
import NavBar from './components/NavBar'
import './App.css'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
// import { Route } from 'react-router'
import { Link, Route, Routes } from "react-router-dom";
import DetailPage from './pages/DetailPage'
import NotFound from './pages/error/NotFoundPage'
import About from './pages/About'

function App() {
  

  return (
    <>
      <NavBar/>
      <div style={{display:'flex'}}>
        <Sidebar/>

        
      

        <Routes>
          <Route path = "/" element={<Homepage/>}/>
          <Route path = "/About" element={<About/>}/>
          <Route path = "/DetailPage/:recipeID" element={<DetailPage/>}/>
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
        



      </div>
      <Footer/>
    </>
  )
}

export default App
