import React, { Component } from "react";
import "../utils/API.js";
import SearchBar from "../components/SearchBar";

class Search extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        API.searchRandomEmployeeList()
          .then(res => this.setState({ employees: res.data.message }))
          .catch(err => console.log(err));
      }
      handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
}