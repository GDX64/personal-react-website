import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-content">
          <Route path="/" component={NavBar} />
          <Route exact path="/about" component={NavBar} />
          <Route exact path="/" component={Home} />
        </div>
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  );
}
