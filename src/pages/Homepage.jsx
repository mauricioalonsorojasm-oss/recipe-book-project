import React from "react";
import RecipeList from "../components/RecipeList";
import CreateRecipe from "../components/CreateRecipe";
import recipes from "../assets/recipe.json";
import { useState } from "react";
import DetailPage from "./DetailPage";

export default function Homepage({ allRecipes, setAllRecipes }) {
  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">
          Discover Delicious <span>Recipes</span>
        </h1>
        <p>
          Explore your collection of hand-picked recipes, from quick weeknight
          dinners to impressive weekend feasts.
        </p>
      </section>

      <CreateRecipe setAllRecipes={setAllRecipes} allRecipes={allRecipes} />

      <RecipeList allRecipes={allRecipes} setAllRecipes={setAllRecipes} />
    </div>
  );
}
