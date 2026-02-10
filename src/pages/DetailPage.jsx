import React from 'react'
import { useNavigate, useParams } from 'react-router'
import Edit from './Edit';
// import rcp from "../assets/recipe.json"

export default function DetailPage({ allRecipes }) {
  const { recipeID } = useParams();
  const navigate = useNavigate();

  const recipeDetail = allRecipes.find(
    (recipe) => recipe.id === recipeID
  );

  if (!recipeDetail) {
    return <p>Recipe not found</p>;
  }

  const isLow = Number(recipeDetail.calories) < 400;

  return (
    <div className="detail-page">
      <div className="detail-card">

        {/* Image */}
        <div className="detail-media">
          <img
            src={recipeDetail.image}
            alt={recipeDetail.name}
            className="detail-image"
          />

          <span className={`pill ${isLow ? "low" : "high"}`}>
            {isLow ? "Low calories" : "High calories"}
          </span>
        </div>

        {/* Content */}
        <div className="detail-body">
          <h1 className="detail-title">{recipeDetail.name}</h1>

          <div className="detail-meta">
            <span>🔥 {recipeDetail.calories} calories</span>
            <span>🍽️ {recipeDetail.servings} servings</span>
          </div>

          <div className="detail-actions">
            <button
              className="btn btn-primary"
              onClick={() => navigate("./edit")}
            >
              Edit recipe
            </button>

            <button
              className="btn btn-ghost"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}