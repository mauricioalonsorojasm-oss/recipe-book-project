import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';

export default function Edit({allRecipes,setAllRecipes}) {
  const param = useParams()
  const navigate = useNavigate()
    let recipeDetail = allRecipes.find((eachRecipe) => {
        return eachRecipe.id === param.recipeID;
    });
      const[name,SetName] = useState(recipeDetail.name)
      const [calories, SetCalories] = useState(recipeDetail.calories)
      const [serving, SetServing] = useState(recipeDetail.serving)
      const [image,SetImage] = useState(recipeDetail.image)
  
  
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
          const modifiedArr = allRecipes.map((eachRecipe) => {
            if(eachRecipe.id === recipeDetail.id){
              let clone = {...recipeDetail} //adding clone so we dont mutate the original object
              clone.name = name
              clone.calories = calories
              clone.serving = serving
              clone.image = image
              return clone
              //return object with modification
            }else {
              return eachRecipe
              //return object without modification
            }
          })
          setAllRecipes(modifiedArr)
          navigate(`/DetailPage/${recipeDetail.id}`)
         
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
