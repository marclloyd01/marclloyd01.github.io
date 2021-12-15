import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-white border p-1">
      <div className="container-fluid">
        <label className="navbar-brand">React</label>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-nowrap">
                Landing Page
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link ">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/timeline" className="nav-link ">
                Timeline
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link ">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactForm" className="nav-link text-nowrap">
                Contact Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link ">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
