import { STRAPI_KEY_API } from "@/constants/env.constants";
import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${STRAPI_KEY_API}`
    },
});
