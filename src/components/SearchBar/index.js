import React from "react";
import "./style.css";

function SearchBar(props) {
    return(
        <form>
        <div className="form-group search">
            <div className="input-group mb-3">
            <input 
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Find An Employee"
        id="search-bar"
        />
        <button className="search-btn" onClick={props.handleFormSubmit}>
                    Search
                </button>
            </div>
        </div>

        </form>
        
    );
   
}
export default SearchBar;