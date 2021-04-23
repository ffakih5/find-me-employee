import React from "react";
import "./style.css";
import TableData from "../TableData";

function Table(props) {
    return(
        <div className="table-wrap">
            <table style={{width: "100%"}}>
            <thead>
                <tr>  <br></br>
                    <th scope="col"></th>
                    <th scope="col">Name</th> 
                    <th scope="col">Phone</th> 
                    <th scope="col">Email</th> 
                    <th scope="col">D.O.B</th> <br></br>
                    <th scope="col">Location</th> <br></br>
                </tr>
                <TableData userData={props.userData} />
            </thead>

        </table>
        </div>
        
    )
}

export default Table;