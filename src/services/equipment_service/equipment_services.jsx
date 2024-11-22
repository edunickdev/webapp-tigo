import axios from "axios";

export const GetEquipmentBySerial = async (serial) => {
    const response = await axios
        .get(`http://localhost:8000/api/equipo/${serial}/`)
        .then((res) => {
        return res.data;
        })
        .catch((err) => {
        throw err;
        });
    return response;
    }

