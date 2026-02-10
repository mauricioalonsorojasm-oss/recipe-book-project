import React from 'react'
import RecipeList from '../components/RecipeList'
import CreateRecipe from '../components/CreateRecipe'
import recipes from "../assets/recipe.json"
import { useState } from 'react'
import DetailPage from './DetailPage'

export default function Homepage({allRecipes,setAllRecipes}) {

  // const [allRecipes, setAllRecipes] = useState(recipes);


  return (
    <div className='home-page'>
      <CreateRecipe setAllRecipes= {setAllRecipes} allRecipes = {allRecipes}/>
      <RecipeList allRecipes = {allRecipes} setAllRecipes= {setAllRecipes}/>
    </div>
  )
}
