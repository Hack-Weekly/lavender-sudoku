import axios from "axios";

const api = axios.create({
  baseURL: "https://lavendersnake.alexdeathway.me",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
