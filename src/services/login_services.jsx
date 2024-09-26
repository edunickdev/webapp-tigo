import axios from "axios";

export const LoginService = (email, password) => {
  axios
    .post("http://127.0.0.1:8000/api/auth/login/", {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
