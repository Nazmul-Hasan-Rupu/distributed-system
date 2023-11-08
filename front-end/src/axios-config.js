import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // Replace with your API base URL
  withCredentials: true, // Allow cookies to be sent and received
});

export default instance;
