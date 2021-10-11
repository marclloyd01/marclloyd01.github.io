import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className = 'navbar navbar-expand navbar-light bg-white fixed-top border'>
            <div className = 'container-fluid'>
                <div className = 'navbar-nav'>
                <Link to= '/react-portfolio'className = 'nav-link '>Landing Page</Link>
                <Link to= '/'className = 'nav-link '>Portfolio</Link>
                <Link to= '/'className = 'nav-link '>Timeline</Link>
                <Link to= '/'className = 'nav-link '>Projects</Link>
                <Link to= '/contactForm'className = 'nav-link '>Contact Form</Link>
                <Link to= '/about'className = 'nav-link '>About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
