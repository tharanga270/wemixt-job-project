function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mixt-nav">
        <div className="container">
          <a className="navbar-brand" href={'#'}>
            <span className="brand-first">STYLISH</span>{' '}
            <span className="brand-second">HAIR</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={'#'}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={'#'}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={'#'}>
                  Appoinment
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-login"
                type="submit"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
