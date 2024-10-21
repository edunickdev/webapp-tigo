import { useUserStore } from "../context/stores";

export const DatosUser = () => {
  const user = useUserStore((state) => state.user);

  console.log(user);

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">DATOS DEL USUARIO</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Fecha */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fecha:
          </label>
          <input
            type="text"
            name="fecha"
            //   value={formData.fecha}
            //   onChange={handleInputChange}
            maxLength="10"
            autoComplete="off"
            placeholder="dd/mm/yyyy"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Nombre del usuario */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre del Usuario:
          </label>
          <input
            type="text"
            name="nombre"
            value={user.nombre}
            maxLength="60"
            autoComplete="off"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Propiedad del equipo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Propiedad del Equipo:
          </label>
          <select
            name="propiedad"
            value={user.propiedad}
            //   onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Seleccionar</option>
            <option value="Colsubsidio">Colsubsidio</option>
            <option value="PCCOM">PCCOM</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        {/* Identificación */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            # Identificación:
          </label>
          <input
            type="text"
            name="cedula"
            value={user.id}
            //   onChange={handleInputChange}
            maxLength="14"
            autoComplete="off"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Celular */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            # Celular:
          </label>
          <input
            type="text"
            name="celular"
            value={user.celular}
            //   onChange={handleInputChange}
            maxLength="12"
            autoComplete="off"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Cargo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cargo:
          </label>
          <input
            type="text"
            name="cargo"
            value={user.cargo}
            //   onChange={handleInputChange}
            maxLength="60"
            autoComplete="off"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Centro de costos */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Centro de Costos:
          </label>
          <input
            type="text"
            name="costos"
            value={user.centrocostos}
            // onChange={handleInputChange}
            maxLength="9"
            autoComplete="off"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Centro Logístico */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Centro Logístico:
          </label>
          <input
            type="text"
            name="logistico"
            value={user.centrologistico}
            // onChange={handleInputChange}
            maxLength="10"
            autoComplete="off"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Sede */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sede:
          </label>
          <input
            type="text"
            name="sede"
            value={user.sede}
            // onChange={handleInputChange}
            maxLength="60"
            autoComplete="off"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Dirección */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Dirección:
          </label>
          <input
            type="text"
            name="direccion"
            value={user.direccion}
            // onChange={handleInputChange}
            maxLength="60"
            autoComplete="off"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Ubicación */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ubicación:
          </label>
          <input
            type="text"
            name="ubicacion"
            value={user.ciudad}
            // onChange={handleInputChange}
            maxLength="60"
            autoComplete="off"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Modalidad de trabajo */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Modalidad de trabajo:
        </label>
        <select
          name="modalidad"
          value={user.modalidad}
          //   onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="">Seleccionar</option>
          <option value="Presencial">Presencial</option>
          <option value="Teletrabajo autónomo">Teletrabajo autónomo</option>
          <option value="Teletrabajo suplementario">
            Teletrabajo suplementario
          </option>
        </select>
      </div>

      {/* Facilidades operativas */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Facilidades operativas:
        </label>
        <select
          name="operativas"
          value={user.facilidades}
          //   onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="">Seleccionar</option>
          <option value="Carnet">Carnet</option>
          <option value="Tarjeta de acceso">Tarjeta de acceso</option>
          <option value="Otros">Otros</option>
        </select>
      </div>

      {/* Tipo de contrato */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Tipo de contrato:
        </label>
        <select
          name="contrato"
          value={user.tipocontrato}
          //   onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="">Seleccionar</option>
          <option value="Trabajador">Trabajador</option>
          <option value="Estudiante en práctica">Estudiante en práctica</option>
          <option value="Contratista">Contratista</option>
        </select>
      </div>
    </div>
  );
};
