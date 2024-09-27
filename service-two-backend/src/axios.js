import axios from "axios";
import { config } from 'dotenv';
config();

const instAxios = axios.create({
    baseURL: process.env.BASE_DB,
    validateStatus: function (status) {
        return status >= 200 && status < 500; // Considera todos los códigos de estado menores a 500 como "éxito"
      }
});

export default instAxios;