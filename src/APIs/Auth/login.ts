import axios from "axios";
import { BASE_URL } from "../../Axios/baseUrl";

interface LoginCredentialsRequest {
  email: string;
  password: string;
}

const login = async (data: LoginCredentialsRequest) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Not able to send credentials", error);
  }
};

export default login;
