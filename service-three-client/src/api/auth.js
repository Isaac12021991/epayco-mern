import axios from "./axios";

export const registerClient = user =>  axios.post(`client/register_client`, user);
export const login = user =>  axios.post(`client/login`, user);
export const logout = () =>  axios.post(`client/logout`);
export const verifyToken = () =>  axios.get(`client/verify_token`);







