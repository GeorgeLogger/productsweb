import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";

import Home from "./components/Home";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/homepage/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <AppNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/Products" component={ProductList} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
