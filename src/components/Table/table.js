import React from "react";

function Table(props) {
    return(
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">D.O.B</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>


        </table>
    )
}

export default Table;