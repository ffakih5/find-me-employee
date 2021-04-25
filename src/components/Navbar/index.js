import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import icon from "../../assets/findemployee.png";


function Navbar(props){
    return (
        <nav className="navbar-expand-lg">
            <Link to="/">
                <img className="navbar-brand" src={icon} alt="FindMeEmployee icon"></img>
            </Link>
            <div>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/">

                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;