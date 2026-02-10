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

        {/* Navigation */}
        {/* <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">Recipes</Link>
          <Link to="/">Categories</Link>
          <Link to="/About">About</Link>
        </div> */}

        {/* Search */}
        {/* <div className="search">
          <input type="text" placeholder="Search recipes..." />
        </div> */}

      </div>
    </nav>
  );
}
