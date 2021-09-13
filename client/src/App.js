import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ProductList from "./components/ProductList";

// import Hero from "./components/Hero";
// import ContactUs from "./components/ContactUs";

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppNavbar />
        {/* <Hero />
        <ContactUs /> */}
        <ProductList />
      </div>
    );
  }
}

export default App;
