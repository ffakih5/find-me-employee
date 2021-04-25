import React from "react";
import "./style.css";
import TableData from "../TableData";

function Table(props) {
    return(
        <div className="wrapper">
            <div className="filter d-inline-block input-group m-3">
            <div className="d-inline-block input-group-propend">
                <label className="input-group-text"> Filter Employee</label>
            </div>
            <select
                value={props.filter}
                name="filter"
                onChange={props.handleFilterChange}
                id="filter"
                className="filter-find d-inline-block">
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="dOb">D.O.B</option>
                    <option value="locaTion">Location</option>
            </select>
        </div>

    
            <div className="table-wrap">
            <table style={{width: "100%"}}>
            <thead>
                <tr>  <br></br>
                    <th scope="col"></th>
                    <th scope="col" onClick={props.handleSortChange}>Name</th> 
                    <th scope="col" onClick={props.handleSortChange}>Phone</th> 
                    <th scope="col" onClick={props.handleSortChange}>Email</th> 
                    <th scope="col" onClick={props.handleSortChange}>D.O.B</th> 
                    <th scope="col" onClick={props.handleSortChange}>Location</th> 
                </tr>
                <TableData userData={props.userData} />
            </thead>

        </table>
        </div>

        </div>
        

    );
}

export default Table;