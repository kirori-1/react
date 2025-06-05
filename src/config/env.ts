const isDev = import.meta.env.MODE === "development";

export const API_BASE_URL = isDev
  ? "/api" // 开发时走本地 mock
  : "https://api.example.com"; // 上线后自动用真实接口
