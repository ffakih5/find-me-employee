import axios from "axios";

export default {
    searchRandomEmployee: function() {
        return axios.get("https://randomuser.me/api/?nat=aus&results=25");
    }
};