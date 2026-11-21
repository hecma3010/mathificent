import { Link } from "react-router";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mathificent
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto text-start">
              <li className="nav-item">
                <Link aria-current="page" className="nav-link active" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
