import { useState } from "react";   //Hook de React que se utiliza para gestionar los valores de los campos de entrada de serial e identificación.
import { useEquipmentStore, useUserStore } from "../../context/stores"; //proporcionando las funciones fetchEquipment y fetchUser para realizar las búsquedas.
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";  //Componentes de la biblioteca NextUI para crear la interfaz de usuario, incluyendo botones, campos de entrada y tablas.
import { IoSearchSharp } from "react-icons/io5"; //Icono de búsqueda utilizado en los botones para representar la acción de buscar.

// El componente FormSearch proporciona un formulario de búsqueda que permite al usuario buscar equipos 
// o usuarios mediante un número de serial o documento. Los resultados de la búsqueda se muestran en una tabla.



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
              fetchEquipment(serial.toString());   //funcion para buscar serial
              console.log("serial=", serial.toString())
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
              fetchUser(identificacion);      //funcion para traer informacion usuario desde el contexto useUserStore
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
              {equipo?.serial ? equipo.serial : "No existe este equipo"}
              {user?.nombre ? user.nombre : "No se tiene nombre"}
            </TableCell>


            {/* Celda 2 */}
            <TableCell className="w-72 text-center">

              {equipo && equipo.serial.length > 0 ? equipo.serial : "No tiene equipo"}
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
