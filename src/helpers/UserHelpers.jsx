import axios from "axios";

export const GetUserById = async (id) => {
  const response = await axios
    .get(`http://localhost:8000/api/usuario/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

export const UpdateUser = async (user) => {
  const response = await axios
    .put(`http://localhost:8000/api/usuario/update/`, user)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};
