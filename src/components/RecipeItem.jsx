

export default function RecipeItem(props) {
  const [recipeElement, SetRecipeElement] = useState (allRecipes)
      let clone = [...recipeElement]
      function deleting(i) {
          clone.splice (i,1)
          SetRecipeElement(clone)
      }
  
  return (
    <div className="recipe-card">
      <img
        className="recipe-image"
        src={props.image}
        alt={props.name}
      />

      <p className="recipe-name">
        recipe: {props.name}
      </p>

      <p className="recipe-calories">
        calories: {props.calories}
      </p>

      <p className="recipe-servings">
        servings: {props.servings}
      </p>

      <h5
        className={
          props.calories < 400
            ? "calorie-tag low"
            : "calorie-tag high"
        }
      >
        {props.calories < 400 ? "low calories" : "high calories"}
      </h5>
      <button onClick={deleting}> delete   </button>
    </div>
  );
}

