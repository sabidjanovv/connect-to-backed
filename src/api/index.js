import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://45.130.148.178:3003",
});

export { request };
