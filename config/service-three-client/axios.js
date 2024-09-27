import axios from "axios";

const instAxios = axios.create({
    baseURL: "http://service-two-backend:3002/api",
    withCredentials: true,
    validateStatus: function (status) {
        return status >= 200 && status < 500;
      }
});

export default instAxios;