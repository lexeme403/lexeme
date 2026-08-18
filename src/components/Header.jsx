function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="home">
          <img src="/assets/images/logo.png" alt="Lexeme logo"/>
          <span>LEXEME</span>
        </a>

        <button
          className="menu-button"
          aria-label="Open navigation"
          aria-expanded="false"
        >
          Menu
        </button>

        <nav className="nav-links" aria-label="Primary">
          <Link to={`/home`}>Home</Link>
          <Link to={`/issues`}>Issues</Link>
          <Link to={`/games`}>Games</Link>
          <Link to={`/about`}>About</Link>
          <Link to={`/contact`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;