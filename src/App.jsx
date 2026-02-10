
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
import { useState } from 'react'
import recipes from './assets/recipe.json'
import Edit from './pages/Edit'

function App() {
  const [allRecipes, setAllRecipes] = useState(recipes);

  return (
    <>
      <NavBar/>
      <div style={{display:'flex'}}>
        <Sidebar/>

        
      

        <Routes>
          <Route path = "/" element={<Homepage allRecipes={allRecipes} setAllRecipes={setAllRecipes}/>}/>
          <Route path = "/About" element={<About/>}/>
          <Route path = "/DetailPage/:recipeID" element={<DetailPage allRecipes={allRecipes}/>}/>
          <Route path = "*" element={<NotFound/>}/>
          <Route path = "/DetailPage/:recipeID/edit" element={<Edit allRecipes={allRecipes} setAllRecipes={setAllRecipes}/>}/>
        </Routes>
        



      </div>
      <Footer/>
    </>
  )
}

export default App
