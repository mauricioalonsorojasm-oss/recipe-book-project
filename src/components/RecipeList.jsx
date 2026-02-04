import { useState } from 'react'
import recipes from "../assets/recipe.json"
import RecipeItem from './RecipeItem'

export default function RecipeList() {
    // const [recipeslist, Setrecipeslist] = useState([])
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
        recipes.map(({id,name,calories,image,servings}) => {

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
