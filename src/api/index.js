import axios from "axios"

const request = axios.create({
    baseURL: "http://45.130.148.178:3003"
})

export {request}
