import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import "../utils/API";
import Table from "./components/Table";
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
