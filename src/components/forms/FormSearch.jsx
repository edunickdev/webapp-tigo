import { useState } from "react";
import { useEquipmentStore, useUserStore } from "../../context/stores";
import { Button, Input } from "@nextui-org/react";
import { IoSearchSharp } from "react-icons/io5";

export const FormSearch = () => {
    const equipo = useEquipmentStore((state) => state.fetchEquipment);
    const user = useUserStore((state) => state.fetchUser);

    const [serial, setSerial] = useState("");
    const [documento, setDocumento] = useState("");

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
            onPress={() => equipo(serial)}
          >
            Buscar por serial
          </Button>

          <h4 className="text-center text-lg font-medium text-gray-700 mt-6 mb-4">
            O también por:
          </h4>

          <Input
            type="text"
            variant="bordered"
            label="Ingresa el número de serial"
            className="col-span-4 my-4"
            value={documento}
            onValueChange={setDocumento}
          />

          <Button
            radius="sm"
            className="w-full bg-blue-500 text-white"
            endContent={<IoSearchSharp />}
            onPress={() => user(documento)}
          >
            Buscar
          </Button>
        </form>
        <div className="col-span-4"></div>
      </div>
    );
}
