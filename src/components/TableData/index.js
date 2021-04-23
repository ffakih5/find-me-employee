import react from "react";
import "./style.css";

function TableData(props) {
    const User= props.userData;

    const dateConfig = (date) => {
        const newDate = new Date(date);
        const yyyy = newDate.getFullYear();
        const mm = newDate.getMonth()+1;
        const dd = newDate.getDate();
    
        const dateData = `${yyyy}-${mm}-${dd}`;
        return dateData
      }

    return User.map((user, index) => (
        <tr className="table-data" key={index}>
            <th className="table-header" scope="row"><img className="profile-pic" src={user.picture.medium} alt="profile-pic" /></th>
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