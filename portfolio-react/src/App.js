import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import About from "./components/About";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [infos, setInfos] = useState({
    firstName: "Marc",
    lastName: "Menguito",
    email: "email@provider.com",
    hobby: "Developer",
    age: 22,
    games: "RPG",
    listenGames: "yes",
    comment: "this is a comment",
  });
  //Change Item
  const addInfo = (info) => {
    const newInfo = { ...info };
    setInfos(newInfo);
  };

  return (
    <Router>
      <div className="d-flex flex-column justify-flex-end">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/projects" component={Projects} />
          <Route path="/contactForm">
            <ContactForm onAdd={addInfo} />
          </Route>

          <Route path="/about">
            <About infos={infos} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
