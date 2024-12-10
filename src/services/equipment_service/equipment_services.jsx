import axios from "axios";
import uuid from 'react-uuid'

export const GetEquipmentBySerial = async (serial) => {
  const response = await axios.get(`http://localhost:8000/equipo/${serial}`);

  return response.data;
};


export const CreateEquipment = async (equipment, accesories, userId, element) => {
  console.log(element);

  let temp = {
    "id": uuid(),
    "serial": equipment["serial_n"],
    "placa": equipment["placa_n"],
    "Marca": parseInt(equipment["marca_n"]) + 1,
    "Modelo": equipment["modelo_n"],
    "nombre_maquina": equipment["nombre_equipo_n"],
    "mac": equipment["mac_n"],
    "disco": equipment["disco_n"],
    "ram": equipment["memoria_n"],
    "ip": equipment["ip_n"],
    "puntored": equipment["puntored_n"],
  }

  if (element === "desktop_n") {
    temp["tipo_elemento"] = 1;
  } else if (element === "laptop_n") {
    temp["tipo_elemento"] = 2;
  } else {
    temp["tipo_elemento"] = 3;
  }

  let accessoryList = []

  accesories.forEach((accesory, index) => {
    let field = accesory.toLowerCase() + "_n";
    if (equipment[field] === true) {
      accessoryList.push(index + 1);
    }
  })

  temp["accesorios"] = accessoryList;
  temp["Usuario"] = userId;

  console.log(temp);
  const result = await axios.post("http://localhost:8000/equipo/create", temp);
  console.log(result.data);
}