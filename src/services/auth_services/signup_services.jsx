import axios from "axios";

export const SignUpService = async (name, lastname, email, password) => {
  
  const response = await axios.post("http://127.0.0.1:8000/api/auth/register/", {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
    });

  return response.data;
};

//componente se encarga de definir las rutas de la aplicación y gestionar el acceso a las mismas.