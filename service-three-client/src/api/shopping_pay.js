import axios from "./axios";

export const shopping_pay = shopping =>  axios.post(`shopping/shopping_pay`, shopping);
export const shopping_pay_confirm = shopping =>  axios.post(`shopping/shopping_pay_confirm`, shopping);





