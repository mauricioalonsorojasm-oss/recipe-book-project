import { useState } from "react";
import recipes from "../assets/recipe.json";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router";

export default function RecipeList({ allRecipes, setAllRecipes }) {
  function deleting(i) {
    const clone = [...allRecipes];
    clone.splice(i, 1);
    setAllRecipes(clone);
  }

  return (
    <div className="recipe-grid">
      {allRecipes.map(({ id, name, calories, image, servings }, i) => (
        <RecipeItem
          key={id}
          id={id}
          name={name}
          calories={calories}
          image={image}
          servings={servings}
          deleting={deleting}
          i={i}
        />
      ))}
    </div>
  );
}