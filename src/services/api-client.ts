import axios from "axios";

const apiClient = axios.create({
  baseURL: "/mycars.json",
  params: {
    //key: import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;