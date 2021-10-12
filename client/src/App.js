import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import { useEffect } from "react";

import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/homepage/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <ScrollToTop />
          <AppNavbar />
          <Route path="/" exact component={Home} />
          <Route path="/Products" component={ProductList} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
