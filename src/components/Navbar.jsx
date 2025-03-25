import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">Books</Link>
    <Link to="/quotes" className="nav-link">Quotes</Link>
  </nav>
);

export default Navbar;
