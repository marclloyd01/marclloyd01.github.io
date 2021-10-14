import Header from "./Header"

const Home = () => {
    
    return (
        <>
            <Header/>
            <div className="d-flex text-center flex-column pb-5 container">
        
        <h1 className="display-5">Projects</h1>
            <div className="row container-fluid">
                <div className="col-md-6 col-sm-12">
                    <h3>Header</h3>
                    
                        <p><a href="src/Projects/calendar.html" className="link-dark">Calendar JavaScript</a></p>
                        <p><a href="build/index.html" className="link-dark">React App</a></p>
                        <p><a href="react-portfolio/" className="link-dark">React Portfolio</a></p>
                    
                    </div>
                <div className="col-md-6 col-sm-12" >
                    <h3>Header</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh ipsum, tristique et velit finibus, dapibus efficitur nulla. Proin auctor id justo ac rutrum. Fusce elementum euismod libero id eleifend. Phasellus at egestas enim. Ut a sodales libero, nec faucibus magna. Praesent mauris orci, fringilla eu suscipit at, tempus eu nunc. Nam id odio tincidunt, tincidunt ligula in, sodales lectus.
                </div>
            </div>
    
    
    </div>
        </>
        
    )
}

export default Home
