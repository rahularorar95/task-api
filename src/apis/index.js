import axios from "axios";

export const axiosLogin = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const axiosAuth = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosAuth.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
