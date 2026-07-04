import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🏨 Hotel Booking</h2>

      <ul>
        <li>Home</li>
        <li>Hotels</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  );
}

export default Navbar;