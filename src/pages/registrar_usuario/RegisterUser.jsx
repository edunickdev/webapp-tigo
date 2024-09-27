import { Button, Input } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import "./register.css";
import ButtonModal from "./registerModal";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import RegisterButtonModal from "./RegisterButtonModal";
import EditButtonModal from "./EditButtonModal";

export const RegisterUser = () => {
  const [busqueda, setBusqueda] = useState("");

  const inputs = [
    { text: "Identificación", name: "cedula" },
    { text: "Celular", name: "celular" },
    { text: "Cargo", name: "cargo" },
    { text: "Centro de costos", name: "costos" },
    { text: "Centro Logístico", name: "logistico" },
    { text: "Sede", name: "sede" },
    { text: "Dirección", name: "direccion" },
    { text: "Ubicación", name: "ubicacion" },
    { text: "Jefe inmediato", name: "jefe" },
    { text: "Gerencia", name: "gerencia" },
    { text: "Usuario de red", name: "usuario_red" },
  ];

  return (
    <div className="flex flex-col items-center max-h-screen bg-gray-100">
      <Input
        type="text"
        variant="bordered"
        label="Ingresa el Número de documento"
        className="w-96 my-10"
        value={busqueda}
        onValueChange={setBusqueda}
        endContent={
          <Button variant="solid">
            <IoSearchSharp className="h-9 w-7" />
          </Button>
        }
      />
      <div className="w-full">
        <div className="grid grid-cols-12 md:flex-row gap-10 col-span-12 shadow-2xl mb-20">
          {/* Tabla */}
          <div className="col-span-1"></div>
          <div className="w-full p-4 col-span-10">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-2 border border-gray-200">#</th>
                  <th className="p-2 border border-gray-200">
                    Nombre del usuario
                  </th>
                  <th className="p-2 border border-gray-200">Identificación</th>
                  <th className="p-2 border border-gray-200">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-200">1</td>
                  <td className="p-2 border border-gray-200">Nombre</td>
                  <td className="p-2 border border-gray-200">Identificación</td>
                  <td className="p-2 border border-gray-200">
                    <RegisterButtonModal inputs={inputs} />
                    <ButtonModal />
                    <EditButtonModal inputs={inputs} />
                    <Button
                      isIconOnly
                      className="bg-red-500 text-white rounded"
                    >
                      <MdDelete className="text-white" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};
