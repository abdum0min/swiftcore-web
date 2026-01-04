import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://exanode.coffeecrm.uz';


const api = axios.create({
    baseURL: BASE_URL + "/api/v1",
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api;