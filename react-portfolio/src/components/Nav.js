import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className = 'navbar navbar-expand navbar-light bg-white'>
            <div className = 'container-fluid'>
                <div className = 'navbar-nav'>
                <Link to= '/'className = 'nav-link active'>Landing Page</Link>
                <Link to= '/'className = 'nav-link '>Portfolio</Link>
                <Link to= '/'className = 'nav-link '>Timeline</Link>
                <Link to= '/'className = 'nav-link '>Projects</Link>
                <Link to= '/'className = 'nav-link '>Contact Form</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
