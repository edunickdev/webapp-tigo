/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import uuid from "react-uuid";

export const GetUserById = async (id) => {
  const response = await axios
    .get(`http://localhost:8000/api/usuario/${id}/`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
  return response;
};

export const UpdateUser = async (user) => {
  const response = await axios
    .put(`http://localhost:8000/api/usuario/update/`, user)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
  return response;
};

export const compareAndUpdateUser = async (originalUser, updatedUser) => {
  updatedUser.sede = parseInt(updatedUser.sede);
  updatedUser.id = parseInt(updatedUser.id);
  const changedFields = {};

  // Compare fields and identify changes
  for (const key in updatedUser) {
    if (originalUser[key] !== updatedUser[key]) {
      changedFields[key] = updatedUser[key];
    }
  }

  // If there are changes, update the user
  if (Object.keys(changedFields).length > 0) {
    const updatedData = { ...originalUser, ...changedFields };
    return await UpdateUser(updatedData);
  } else {
    alert("No changes detected");
    return originalUser;
  }
};

export const CreateUser = async (usr) => {
  usr.sede = parseInt(usr.sede) + 1;
  usr["id"] = uuid();

  const response = await axios.post(`http://localhost:8000/api/usuario/update/`, usr);
  return response.data;
};

export const DeleteUser = async (usr) => {
  const response = await axios.delete(
    `http://localhost:8000/api/usuario/update/`, {
      data: usr
    }
  );
  return response.data;
}

export const GetSedes = async () => {
  const response = await axios.get(`http://localhost:8000/api/usuario/sedes/`);

  return response.data
}
