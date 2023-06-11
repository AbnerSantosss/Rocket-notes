import axios from "axios"



export const api = axios.create({
    //url tem que ser maiuscula
    baseURL: "https://rokcet-notes-api.onrender.com/"
})

