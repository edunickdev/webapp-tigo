import axios from "axios";

const SignUpService = (name, lastname, email, password) => {
  if (name === "" || lastname === "" || email === "" || password === "") {
    return;
  }

  axios
    .post("http://127.0.0.1:8000/api/auth/register/", {
      name: name,
      lastname: lastname,
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

export default SignUpService;
