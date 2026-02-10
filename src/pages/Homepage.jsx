import React from 'react'
import RecipeList from '../components/RecipeList'
import CreateRecipe from '../components/CreateRecipe'
import recipes from "../assets/recipe.json"
import { useState } from 'react'
import DetailPage from './DetailPage'

export default function Homepage({ allRecipes, setAllRecipes }) {
  return (
    <div className="home-page">

      {/* ✅ HERO goes here (top of the page) */}
      <section className="hero">
        <h1 className="hero-title">
          Discover Delicious <span>Recipes</span>
        </h1>
        <p>
          Explore your collection of hand-picked recipes, from quick weeknight dinners to impressive weekend feasts.
        </p>
      </section>

      {/* ✅ Your form */}
      <CreateRecipe setAllRecipes={setAllRecipes} allRecipes={allRecipes} />

      {/* ✅ Your list (RecipeList should render the grid/cards) */}
      <RecipeList allRecipes={allRecipes} setAllRecipes={setAllRecipes} />
    </div>
  );
}