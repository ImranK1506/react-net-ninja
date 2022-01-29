const Navbar = () => {
  return (
      <div>
        <nav className="navbar">
          <h1>Ninja blog</h1>
          <div className="links">
            <a href="/">Home</a>
            <a href="/create">New blog</a>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;