import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    /*<Auth0Provider
      domain="find-me-employee.au.auth0.com"
      clientId="con_f6OZv3UOzbolmrtm"
      redirectUri={window.location.origin}
    >
    </Auth0Provider>*/
    <App />,document.getElementById("root"));