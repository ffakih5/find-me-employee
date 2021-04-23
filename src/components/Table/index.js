import React from "react";
import "./style.css";
import TableData from "../TableData";

function Table(props) {
    return(
        <div className="table-wrap">
            <table style={{width: "100%"}}>
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">D.O.B</th>
                    <th scope="col">Location</th>
                    <TableData userData={props.userData} />
                </tr>
            </thead>

        </table>
        </div>
        
    )
}

export default Table;