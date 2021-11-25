import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link className="navbar" to="/">
        Home
      </Link>
      <Link className="navbar" to="/About">
        About
      </Link>
      <Link className="navbar" to="/Contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;
