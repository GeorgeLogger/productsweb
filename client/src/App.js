import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import ProductList from "./components/ProductList";

import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <AppNavbar />
        <Route path="/Products" component={ProductList} />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
