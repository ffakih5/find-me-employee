import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import "../utils/API";
import Table from "./components/Table";
import Footer from "./components/Footer";
import API from "../utils/API";


function App() {
const[users, setUser] = useState([]);

useEffect(() => {
  API.searchRandomEmployee().then((res) => {
    setUser(res.data.results)
  })
}, []);
  return (
    <Router>
      <div className="App">
      <Navbar />
      <SearchBar />
      <Table />
      <Footer />
    </div>
  </Router>
   );

}

export default App;
