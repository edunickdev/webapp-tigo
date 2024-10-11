import { Button, Input } from "@nextui-org/react";
import ButtonModal from "./registerModal";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import RegisterButtonModal from "./RegisterButtonModal";
import EditButtonModal from "./EditButtonModal";
import DeleteButtonModal from "./DeleteButtonModal";
import { inputs } from "../../helpers/constants";
import { useUserStore } from "../../context/stores";

export const RegisterUser = () => {
  const user = useUserStore((state) => state.user);
  const fetchUser = useUserStore((state) => state.fetchUser);
  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="flex flex-col items-center min-h-screen ">
      <Input
        type="text"
        variant="bordered"
        label="Ingresa el Número de documento"
        className="w-96 my-10"
        value={busqueda}
        onValueChange={setBusqueda}
        endContent={
          <Button variant="solid" onPress={() => fetchUser(busqueda)}>
            <IoSearchSharp className="h-9 w-7" />
          </Button>
        }
      />
      <div className="w-full">
        <div className="grid grid-cols-12 md:flex-row gap-10 col-span-12 shadow-2xl mb-20">
          <div className="col-span-1"></div>
          <table className="border border-gray-200 p-4 col-span-10 ">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-2 border w-20 border-gray-200">#</th>
                <th className="p-2 border w-96 border-gray-200">
                  Nombre del usuario
                </th>
                <th className="p-2 border w-80 border-gray-200">
                  Identificación del usuario
                </th>
                <th className="p-2 border border-gray-200">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-200">1</td>
                <td className="p-2 border border-gray-200">
                  {user && user.nombre.length > 0
                    ? user.nombre
                    : "No se tiene nombre"}
                </td>
                <td className="p-2 border border-gray-200">
                  {user && user.id ? user.id : "No se tiene documento"}
                </td>
                <td className="p-2 border border-gray-200">
                  <RegisterButtonModal inputs={inputs} />
                  <ButtonModal />
                  <EditButtonModal inputs={inputs} />
                  <DeleteButtonModal />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};
