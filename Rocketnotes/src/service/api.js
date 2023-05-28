import axios from "axios"



export const api = axios.create({
    //url tem que ser maiuscula
    baseURL: "http://localhost:3333"
})

api.get("/use")