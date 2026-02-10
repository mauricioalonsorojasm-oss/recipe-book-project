import { useState } from "react";
import recipes from "../assets/recipe.json";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router";

export default function RecipeList({ allRecipes ,setAllRecipes}) {

    // console.log(allRecipes)
    
    function deleting(i) {
        let clone = [...allRecipes];
        clone.splice (i,1);
        setAllRecipes(clone);
    }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* {console.log(allRecipes)} */}
      {allRecipes.map(({ id, name, calories, image, servings },i) => {
        return (
          <div key={id}>
            
                <RecipeItem
                    name={name}
                    calories={calories}
                    image={image}
                    servings={servings}
                    deleting={deleting}
                    i={i}
                    id={id}
                    />
            
          </div>
        );
      })}
    </div>
  );
}
