import axios from "axios";

 const API = {
    searchRandomEmployee: function() {
        return axios.get("https://randomuser.me/api/?nat=aus&results=25");
    }
};

export default API