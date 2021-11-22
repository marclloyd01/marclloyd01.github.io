
const Footer = () => {
    return (
        <footer className="responsive-footer-bottom-fixed-md bg-dark py-2">
        <div className="row container-fluid text-white">
        <div className="col-md-6 col-sm-12">
            <h3>Contact</h3>
              <ul>
                  <li>09568434336</li>
                  <li>lloydmenguito@gmail.com</li>
              </ul>
        </div>
        <div className="col-md-6 col-sm-12">
            <h3>Resources</h3>
              <ul>
                  <li><a href="https://developer.mozilla.org/en-US/" target="_blank" className="link-light">Developer Mozilla</a></li>
                  <li><a href="https://www.w3schools.com/" target="_blank" className="link-light">w3schools</a></li>
                  
              </ul>
        </div>
    </div>
    </footer>
    )
}

export default Footer
