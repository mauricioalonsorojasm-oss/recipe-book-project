import { Link } from "react-router-dom";

export default function RecipeItem({ id, name, calories, servings, image, deleting, i }) {
  const isLow = Number(calories) < 400;

  return (
    <article className="recipe-card">
      <div className="recipe-media">
        <img className="recipe-image" src={image} alt={name} />

        {/* optional badge on image */}
        <span className={`pill ${isLow ? "low" : "high"}`}>
          {isLow ? "Low calories" : "High calories"}
        </span>
      </div>

      <div className="recipe-body">
        <Link className="recipe-link" to={`/DetailPage/${id}`}>
          <h3 className="recipe-name">{name}</h3>
        </Link>

        <div className="meta">
          <span>🔥 {calories} cal</span>
          <span>🍽️ {servings} servings</span>
        </div>

        <div className="card-actions">
          <button className="btn btn-ghost" onClick={() => deleting(i)}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
