import react from "react";
import "./style.css";

function TableData(props) {
    const dateConfig = (date) => {
        const newDate = new Date(date);
        const yyyy = newDate.getFullYear();
        const mm = newDate.getMonth()+1;
        const dd = newDate.getDate();
    
        const dateData = `${yyyy}-${mm}-${dd}`;
        return dateData
      }

    return props.map((user, index) => (
        <tr className="table-row" key={index}>
            <td> {user.name.first}</td>
            <td> {user.name.last}</td>
            <td> {user.phone}</td>
            <td> {user.email}</td>
            <td> {dateConfig(user.dob.date)}</td>
            <td> {user.location.city}</td>
        </tr>
    ))

}

export default TableData;