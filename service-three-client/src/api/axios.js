import axios from "axios";

const instAxios = axios.create({
    baseURL: "http://localhost:3002/api",
    withCredentials: true,
    validateStatus: function (status) {
        return status >= 200 && status < 500; // Considera todos los códigos de estado menores a 500 como "éxito"
      }
});

export default instAxios;