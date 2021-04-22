import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <SearchBar />
      <Footer />
    </div>
    </Router>
   );

}

export default App;
