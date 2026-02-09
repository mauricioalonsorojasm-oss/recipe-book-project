import React from 'react'
import { useParams } from 'react-router'
import rcp from "../assets/recipe.json"

export default function DetailPage() {
    const param = useParams()
    

    let recipeDetail = rcp.find((eachRecipe) => {
        // console.log(recipeDetail.name)
        return eachRecipe.id === param.recipeID;
        
        
    });
  return (
    <div>
    <div >
      <h1>recipe</h1>
      <h2>{recipeDetail.name}</h2>
      <p>{recipeDetail.calories}</p>
    </div>
        
    </div>
  )
}
