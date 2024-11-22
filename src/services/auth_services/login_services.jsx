import axios from "axios";
import { notify } from "../../helpers/notifications";


export const LoginService = async (email, password) => {
  const request = await axios.post("http://127.0.0.1:8000/api/auth/login/", {
      email: email,
      password: password,
    });

  return request.data;
};
