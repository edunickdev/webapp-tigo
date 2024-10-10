/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

export const GetUserById = async (id) => {
  const response = await axios
    .get(`http://localhost:8000/api/usuario/${id}`)
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
    console.log("No changes detected");
    return originalUser;
  }
};

