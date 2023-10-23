import './header.css'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


function Header() {
  return (
    <nav className="navbar navbar-dark custom-header">
          <Link to="/playlist" >
            <Button id='main-playlist-link'>All playlists</Button>
          </Link>
      <div className="footer-container">
        <span className="navbar-brand mb-0 h1">
          Music playlist
        </span>
      </div>
    </nav>
  );
}

export default Header;

