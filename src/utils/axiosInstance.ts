// src/utils/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.xxx.com", // ✅ 替换为你的二级域名
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
