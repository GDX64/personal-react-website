import React from "react";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import "./styles.css";
//import Gravity from "./three/gravity/Gravity";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-content">
          {/* <Route exact path="/" component={Gravity} /> */}
          <Route path="/" component={NavBar} />
          <Route exact path="/about" component={NavBar} />
          <Route exact path="/" component={Home} />
        </div>
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  );
}
