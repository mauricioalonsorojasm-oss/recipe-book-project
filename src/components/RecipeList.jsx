import { useState } from 'react'
import recipes from "../assets/recipe.json"
import RecipeItem from './RecipeItem'

export default function RecipeList({allRecipes}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
        allRecipes.map(({id,name,calories,image,servings}) => {

            return (
                <div key={id}>
                    <RecipeItem
                        name={name} 
                        calories={calories}
                        image = {image}
                        servings = {servings}
                    />
                </div>
            )
        })
        }
    </div>
  )
}
