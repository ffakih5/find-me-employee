import react from "react";
import "./style.css";

function TableData(props) {
    return props.map((user, index) => (
        <tr className="table-row" key={index}>
            <td> {user.name.first}</td>
            <td> {user.name.last}</td>
            <td> {user.phone}</td>
            <td> {user.email}</td>
            <td> {user.dob.date}</td>
            <td> {user.location.city}</td>
        </tr>
    ))

}

export default TableData;