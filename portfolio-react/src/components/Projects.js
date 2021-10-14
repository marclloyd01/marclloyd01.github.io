import Frame
 from "./Frame"
const Projects = () => {
    return (
        <>
        <div className="py-2 mt-5 container-fluid text-center bg-dark text-white">
            <h3>Projects</h3>
        </div>

        <div className="container-fluid bg-light py-2">
            <div className = 'row'>
                <Frame title = 'Portfolio' src = 'https://marclloyd01.github.io/index.html'/>
                <Frame title = 'Calendar JavaScript' src = 'https://marclloyd01.github.io/src/Projects/calendar.html'/>
                <Frame title = 'React App' src = 'https://marclloyd01.github.io/build/index.html'/>
                <Frame title = 'Portfolio with React' src = 'react-portfolio'/>
            </div>
        </div>
        </>
    )
}

export default Projects
