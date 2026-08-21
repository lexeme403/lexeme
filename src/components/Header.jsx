import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="site-header">
      <div className="container nav">

        <Link
          to="/home"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/images/logo.png`}
            alt="Lexeme logo"
          />
          <span>LEXEME</span>
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          Menu
        </button>

        <nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Primary"
        >
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/issues" onClick={closeMenu}>
            Issues
          </Link>

          <Link to="/games" onClick={closeMenu}>
            Games
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;