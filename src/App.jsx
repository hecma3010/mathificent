import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Mathificent
            </a>
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
                  <a aria-current="page" className="nav-link active" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <h1 className="text-center">Mathificent</h1>
      <Footer />
    </>
  );
}

export default App;
