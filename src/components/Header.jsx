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
          <a href="/home">Home</a>
          <a href="/issues">Issues</a>
          <a href="/games">Games</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;