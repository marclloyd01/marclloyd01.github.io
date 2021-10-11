import Header from "./Header"

const Home = () => {
    
    return (
        <>
            <Header/>
            <div className ='d-flex text-center mb-4'>
                <div className = 'col bg-light'>
                    <h1 className = 'display-5'>Projects</h1>
                    <div className = 'row container-fluid'>
                        <div className = 'col'>
                            <h3>Header</h3>
                            <ul>
                                <li> Calendar JavaScript </li>
                                <li> React App</li>
                            </ul>
                        </div>
                        <div className = 'col'>
                            <h3>Header</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh ipsum, tristique et velit finibus, dapibus efficitur nulla. Proin auctor id justo ac rutrum. Fusce elementum euismod libero id eleifend. Phasellus at egestas enim. Ut a sodales libero, nec faucibus magna. Praesent mauris orci, fringilla eu suscipit at, tempus eu nunc. Nam id odio tincidunt, tincidunt ligula in, sodales lectus.
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Home
