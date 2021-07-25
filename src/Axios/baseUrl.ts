import axios from "axios";

const BASE_URL = "https://api-dev.domecompass.com";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
