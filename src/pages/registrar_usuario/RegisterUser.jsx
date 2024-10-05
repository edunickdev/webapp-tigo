import { Button, Input } from "@nextui-org/react";
import "./register.css";
import ButtonModal from "./registerModal";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import RegisterButtonModal from "./RegisterButtonModal";
import EditButtonModal from "./EditButtonModal";
import DeleteButtonModal from "./DeleteButtonModal";
import { GetUserById } from "../../helpers/UserHelpers";

export const RegisterUser = () => {
  const [user, setUser] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [nDoc, setNDoc] = useState("");

  const [userInputs, setUserInputs] = useState([]);

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

  const handleSearch = async () => {
    setLoading(true);
    const result = await GetUserById(busqueda);
    setName(result.nombre);
    setNDoc(result.id);
    setUser(result);
    setUserInputs([
      { text: "id", name: result.id },
      { text: "Celular", name: result.celular },
      { text: "Cargo", name: result.cargo },
      { text: "Centro de costos", name: result.centrocostos },
      { text: "Centro Logístico", name: result.centrologistico },
      { text: "Sede", name: result.sede },
      { text: "Dirección", name: result.direccion },
      { text: "Ubicación", name: result.ubicacion },
      { text: "Jefe inmediato", name: result.jefe },
      { text: "Gerencia", name: result.gerencia },
      { text: "Usuario de red", name: result.usuariored },
    ]);
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      console.log("Cargando...");
    }
  }, [loading]);

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
          <Button variant="solid" onPress={() => handleSearch(busqueda)}>
            <IoSearchSharp className="h-9 w-7" />
          </Button>
        }
      />
      <div className="w-full">
        <div className="grid grid-cols-12 md:flex-row gap-10 col-span-12 shadow-2xl mb-20">
          {/* Tabla */}
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
                  {name.length > 0 ? name : "No se tiene nombre"}
                </td>
                <td className="p-2 border border-gray-200">
                  {nDoc ? nDoc : "No se tiene documento"}
                </td>
                <td className="p-2 border border-gray-200">
                  <RegisterButtonModal inputs={inputs} />
                  <ButtonModal user={user} />
                  <EditButtonModal
                    inputs={userInputs.length > 0 ? userInputs : inputs}
                    user={user}
                  />
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
