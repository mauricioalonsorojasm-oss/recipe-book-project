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
      <div className="edit-page">
      <div className="edit-card">
        <h1 className="edit-title">Edit recipe</h1>
        <p className="edit-subtitle">Update the recipe details and save your changes.</p>

        <form className="edit-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Image URL</span>
            <input
              type="url"
              placeholder="https://..."
              onChange={handleImage}
              value={image}
            />
          </label>

          <label className="field">
            <span>Recipe name</span>
            <input
              type="text"
              placeholder="Recipe name"
              onChange={handleName}
              value={name}
            />
          </label>

          <div className="edit-row">
            <label className="field">
              <span>Calories</span>
              <input
                type="number"
                placeholder="0"
                onChange={handleCalories}
                value={calories}
              />
            </label>

            <label className="field">
              <span>Servings</span>
              <input
                type="number"
                placeholder="0"
                onChange={handleServing}
                value={serving}
              />
            </label>
          </div>

          <div className="edit-actions">
            <button className="btn btn-primary" type="submit">
              Save changes
            </button>

            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
    

