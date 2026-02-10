import React from 'react'
import { useNavigate, useParams } from 'react-router'
import Edit from './Edit';
// import rcp from "../assets/recipe.json"

export default function DetailPage({allRecipes}) {
    const param = useParams()
    const navToEdit = useNavigate()
    

    let recipeDetail = allRecipes.find((eachRecipe) => {
        // console.log(recipeDetail.name)
        return eachRecipe.id === param.recipeID;
        
        
    });
  return (
    <div>
    <div >
      <h1>recipe</h1>
      <h2>{recipeDetail.name}</h2>
      <p>{recipeDetail.calories}</p>
      <p>{recipeDetail.serving}</p>
      <button onClick={() => navToEdit("./edit")}>edit</button>
    </div>
        
    </div>
  )
}
