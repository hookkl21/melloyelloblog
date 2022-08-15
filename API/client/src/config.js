import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mello-yello-blog.herokuapp.com/api/",
});
