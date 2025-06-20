import './Navbar.css';

const Navbar = () => {
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  return (
    <nav className="navbar">
      <h1>My App</h1>
      <div>
        {!isAuthenticated() && <a href="/login">Login</a>}
        {!isAuthenticated() && <a href="/register">Register</a>}
        {isAuthenticated() && <a href="/dashboard">Dashboard</a>}
        {isAuthenticated() && <a href="/logout">LogOut</a>}
      </div>
    </nav>
  );
};

export default Navbar;
 