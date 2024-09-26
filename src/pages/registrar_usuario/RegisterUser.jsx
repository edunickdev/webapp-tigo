import { Button } from "@nextui-org/react";
import { MdEdit, MdDelete } from "react-icons/md";
import "./register.css";
import ButtonModal from "./registerModal";

export const RegisterUser = () => {
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
    <div className="flex flex-col  min-h-screen bg-gray-100">
      <form className="flex w-1/4  border border-gray-300 rounded-md shadow-md p-1 bg-white mb-6">
        <input
          type="text"
          placeholder="Buscar # identificación..."
          className="w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 rounded-l-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
        >
          Buscar
        </button>
      </form>

      <div className="grid grid-cols-12 md:flex-row gap-10 col-span-12">
        <form
          className="bg-white p-6 rounded-lg shadow-lg w-full col-span-5"
          method="POST"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre del usuario
              </label>
              <input
                type="text"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                name="nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Propiedad
              </label>
              <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                name="propiedad"
                required
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="opcion1">Colsubsidio</option>
                <option value="opcion2">PCCOM</option>
                <option value="opcion3">Otros</option>
              </select>
            </div>

            {inputs.map((item) => (
              <div key={item.name}>
                <label className="block text-sm font-medium text-gray-700">
                  {item.text}
                </label>
                <input
                  type="text"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  name={item.name}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Modalidad de trabajo
              </label>
              <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                name="modalidad"
                required
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="opcion1">Presencial</option>
                <option value="opcion2">Teletrabajo Autónomo</option>
                <option value="opcion3">Teletrabajo Suplementario</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Facilidades operativas
              </label>
              <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                name="operativas"
                required
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="opcion1">Carnet</option>
                <option value="opcion2">Tarjeta de acceso</option>
                <option value="opcion3">Otros</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo de contrato del usuario
              </label>
              <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                name="contrato"
                required
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="opcion1">Trabajador</option>
                <option value="opcion2">Estudiante en práctica</option>
                <option value="opcion3">Contratista</option>
              </select>
            </div>

            <Button color="primary" className="mt-4">
              Crear
            </Button>
          </div>
        </form>

        {/* Tabla */}
        <div className="w-full p-4 col-span-7">
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
                  <ButtonModal />
                  <Button
                    isIconOnly
                    className="bg-green-700 text-white rounded mx-1"
                  >
                    <MdEdit className="text-white" />
                  </Button>
                  <Button isIconOnly className="bg-red-500 text-white rounded">
                    <MdDelete className="text-white" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
