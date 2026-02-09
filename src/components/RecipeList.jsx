import { useState } from "react";
import recipes from "../assets/recipe.json";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router";

export default function RecipeList({ allRecipes }) {
    const [recipeElement, SetRecipeElement] = useState (allRecipes)
    // console.log(allRecipes)
    
    function deleting(i) {
        let clone = [...recipeElement];
        clone.splice (i,1);
        SetRecipeElement(clone);
    }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* {console.log(allRecipes)} */}
      {recipeElement.map(({ id, name, calories, image, servings },i) => {
        return (
          <div key={id}>
            <Link to={`/DetailPage/${id}`}>
                <RecipeItem
                    name={name}
                    calories={calories}
                    image={image}
                    servings={servings}
                    deleting={deleting}
                    i={i}
                    />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
