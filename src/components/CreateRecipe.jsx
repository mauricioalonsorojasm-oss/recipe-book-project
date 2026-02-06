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
    <div>
        <form onSubmit={handleSubmit}>
            <input type="url" placeholder="Image URL" onChange={handleImage} value={image} />
            <input type="text" onChange={handleName} value={name}/>
            <input type="number" onChange={handleCalories} value={calories}/>
            <input type="number" onChange={handleServing} value={serving}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
