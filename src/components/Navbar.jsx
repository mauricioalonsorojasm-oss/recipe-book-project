import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Brand text */}
        <div className="brand-text">
          <span className="brand-dot">R</span>
          <span className="brand-name">RecipeBook</span>
        </div>
      </div>
    </nav>
  );
}
