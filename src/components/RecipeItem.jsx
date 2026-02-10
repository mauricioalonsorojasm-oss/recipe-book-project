import { Link } from "react-router";

export default function RecipeItem(props) {
  return (
    <div className="recipe-card">
      
      <img className="recipe-image" src={props.image} alt={props.name} />

      <Link to={`/DetailPage/${props.id}`}>
        <p className="recipe-name">{props.name}</p>
      </Link>

      <p className="recipe-calories">calories: {props.calories}</p>

      <p className="recipe-servings">servings: {props.servings}</p>

      <h5
        className={
          props.calories < 400 ? "calorie-tag low" : "calorie-tag high"
        }
      >
        {props.calories < 400 ? "low calories" : "high calories"}
      </h5>
      <button onClick={() => props.deleting(props.i)}> delete </button>
    </div>
  );
}
