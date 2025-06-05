import axios from "axios";
import { API_BASE_URL } from "../config/env";

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

export default client;
