import axios from "axios";

export const GetEquipmentBySerial = async (serial) => {
  const response = await axios.get(`http://localhost:8000/equipo/${serial}`);

  return response.data;
};
