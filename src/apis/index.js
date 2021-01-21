import axios from "axios";

export const axiosLogin = axios.create({
  baseURL: "http://34.229.13.159:8080",
});

export const axiosAuth = axios.create({
  baseURL: "http://34.229.13.159:8080",
});

axiosAuth.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
