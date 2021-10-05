
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch> 
        <Route path = '/' exact component = {Home}/>
        <Route path = '/about' component = {Home}/>
        <Route path = '/shop' component = {Home}/>
        </Switch>
        <Footer/>
      </div>
      
    </Router>
    
  );
}

export default App;
