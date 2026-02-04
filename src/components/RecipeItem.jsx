

// export default function RecipeItem(props) {
//   return (

//       <div>
//         <p>recipe : {props.name}</p>
//         <p>calories :{props.calories}</p>
//         <img style={{ width: "100px" }} src={props.image} alt="" />
//         <p>servings :{props.servings}</p>
//         <h5>
//             {
//                 props.calories < 400 ? "low calories" : "high calories"
//             }
//         </h5>
//       </div>

//   );
// }

export default function RecipeItem(props) {
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
    </div>
  );
}

