import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className = 'navbar navbar-expand navbar-light bg-white fixed-top border'>
            <div className = 'container-fluid justify-content-start'>
                <a className = 'navbar-brand' href= '#'>React</a>
                <div className = 'navbar-nav d-flex'>
                <Link to= '/react-portfolio'className = 'nav-link '>Landing Page</Link>
                <Link to= '/react-portfolio'className = 'nav-link '>Portfolio</Link>
                <Link to= '/react-portfolio'className = 'nav-link '>Timeline</Link>
                <Link to= '/react-portfolio'className = 'nav-link '>Projects</Link>
                <Link to= '/contactForm'className = 'nav-link '>Contact Form</Link>
                <Link to= '/about'className = 'nav-link '>About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
