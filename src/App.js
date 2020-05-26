import React from "react";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import "./styles.css";
import "./App.css"
import Gravity from "./three/gravity/Gravity";
import Cubes from "./three/cubes/Cubes";
import Blog from "./pages/blog/Blog";
import SpaceShip from "./three/spaceShip/SpaceShip";
import About from "./pages/about/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-content">
          <Route exact path="/" component={SpaceShip} />
          <Route path="/" component={NavBar} />
          <Route exact path="/about" component={About} />
          <Route path="/pj/space-ship" component={SpaceShip} />
          <Route exact path="/pj/gravity" component={Gravity} />
          <Route exact path="/cubes" component={Cubes} />
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </div>
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  );
}
