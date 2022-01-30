import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
        <nav className="navbar">
          <h1>Ninja blog</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New blog</Link>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;