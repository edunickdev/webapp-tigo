import { useState } from "react";
import { useEquipmentStore, useUserStore } from "../../context/stores";
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { IoSearchSharp } from "react-icons/io5";

export const FormSearch = () => {
  const fetchEquipment = useEquipmentStore((state) => state.fetchEquipment);
  const equipo = useEquipmentStore((state) => state.equipment);
  const fetchUser = useUserStore((state) => state.fetchUser);
  const user = useUserStore((state) => state.user);

  const [serial, setSerial] = useState("");
  const [identificacion, setIdentificacion] = useState("");

  return (
    <div className="grid grid-cols-12 h-[90vh] bg-gray-100 items-center">
      <div className="col-span-4"></div>

      <form
        action=""
        method="get"
        className="col-span-4 w-full max-w-md p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-center text-2xl text-blue-700">Búsqueda por Serial o Documento</h2>

        <Input
          type="text"
          variant="bordered"
          label="Ingresa el número de serial"
          className="col-span-4 my-4"
          value={serial}
          onValueChange={setSerial}
        />

        <Button
          radius="sm"
          className="w-full bg-blue-500 text-white"
          endContent={<IoSearchSharp />}
          onPress={() => {
            if (serial) {
              fetchEquipment(serial.toString());
              console.log("serial=",serial.toString())
            } else {
              alert("Por favor ingresa un número de serial.");
            }
          }}
        >
          Buscar por serial
        </Button>

        <h4 className="text-center text-lg font-medium text-gray-700 mt-6 mb-4">
          O también por:
        </h4>

        <Input
          type="text"
          variant="bordered"
          label="Ingresa el número de documento"
          className="col-span-4 my-4"
          value={identificacion}
          onValueChange={setIdentificacion}
        />

        <Button
          radius="sm"
          className="w-full bg-blue-500 text-white"
          endContent={<IoSearchSharp />}
          onPress={() => {
            if (identificacion.trim()) {
              fetchUser(identificacion);
            } else {
              alert("Por favor ingresa un número de documento.");
            }
          }}

        >
          Buscar
        </Button>
      </form>

      <div className="col-span-4"></div>
      <div className="col-span-2"></div>
      <Table
        aria-label="Example table with dynamic content"
        className="col-span-8"
        color="primary"
      >
        <TableHeader>
          <TableColumn className="text-center">Acta / usuario</TableColumn>
          <TableColumn className="text-center">
            Serial Equipo
          </TableColumn>
          <TableColumn className="text-center"></TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            {/* Celda 1 */}
            <TableCell className="w-72 text-center">
              {equipo && equipo.serial.length > 0 ? equipo.serial : "No existe este equipo"}
              {user && user.nombre.length > 0 ? user.nombre : "No se tiene nombre"}
            </TableCell>

            {/* Celda 2 */}
            <TableCell className="w-72 text-center">
              
              {equipo && equipo.serial ? equipo.serial : "No tiene equipo"}
            </TableCell>

            {/* Celda 3 */}
            <TableCell className="flex justify-center items-center gap-x-1">
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
