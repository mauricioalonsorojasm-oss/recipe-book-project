import React, { useState } from 'react'
import recipes from "../assets/recipe.json"

export default function CreateRecipe({allRecipes, setAllRecipes}) {
    const[name,SetName] = useState("")
    const [calories, SetCalories] = useState(0)
    const [serving, SetServing] = useState(0)
    const [image,SetImage] = useState("")


    const handleName = (event) => {
        SetName(event.target.value)
    }
    const handleCalories = (event) => {
        SetCalories(event.target.value)
    }
    const handleServing = (event) => {
        SetServing(event.target.value)
    }
    const handleImage = (event) => {
        SetImage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const NewRecipe = {
            id: `${Math.random()*100000000000}`,
            name : name,
            calories :calories,
            serving:serving,
            image:image
        }
        let clone = [...allRecipes]
        clone.push(NewRecipe)
        setAllRecipes(clone)
       
    }
    
  return (
    <div className="create-wrap">
      <form className="create-form" onSubmit={handleSubmit}>
        <input type="url" placeholder="Image URL" onChange={handleImage} value={image} />
        <input type="text" placeholder="Recipe name" onChange={handleName} value={name} />
        <input type="number" placeholder="Calories" onChange={handleCalories} value={calories} />
        <input type="number" placeholder="Servings" onChange={handleServing} value={serving} />
        <button className="btn btn-primary" type="submit">Add</button>
      </form>
    </div>
  )
}
