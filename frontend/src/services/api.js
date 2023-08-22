import axios from "axios";

const api = axios.create({
  baseURL: "https://lavendersnake.alexdeathway.me/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
