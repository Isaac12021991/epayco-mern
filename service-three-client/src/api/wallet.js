import axios from "./axios";

export const wallet_load = wallet =>  axios.post(`wallet/wallet_load`, wallet);
export const wallet_client_check = wallet =>  axios.post(`wallet/wallet_client_check`, wallet);
