import axios from "axios";
import { notify } from "../../helpers/notifications";


export const LoginService = async (email, password) => {
  if (email === "" || password === "") {
    return;
  }

  const request = await axios.post("http://127.0.0.1:8000/api/auth/login/", {
      email: email,
      password: password,
    });

  if (request.status === 200) {
    notify(["Inicio de sesión exitoso", "Inicio de sesión exitoso", "Error al iniciar sesión"]);
    return request.data;
  } else {
    notify("Error al iniciar sesión");
  }

  return request.data;
};
