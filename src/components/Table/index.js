import React from "react";
import "./style.css";
import TableData from "../TableData";

function Table(props) {
    return(
        <table style={{width: "100%"}}>
        <div className="table-wrap">
            <table style={{width: "100%"}}>
            <thead>
                <tr>
                    <th scope="col"></th><br></br>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">D.O.B</th>
                    <th scope="col">Location</th>
                </tr>
                <TableData userData={props.userData} />
            </thead>

        </table>
        </div>
        </table>

    )
}

export default Table;