import { Accordion, AccordionItem } from "@nextui-org/react";
import { useUserStore } from "../context/stores";

export const DatosUser = () => {
  const user = useUserStore((state) => state.user);

  return (
    <>
      {user ? (
        <div className="grid grid-cols-12 gap-x-10 py-5 bg-gray-200 rounded-lg">
          <div className="col-span-1"></div>
          <div className="col-span-5 flex flex-col justify-start">
            <span className="text-start">
              <b>Fecha:</b> {user.fecha}
            </span>
            <span className="text-start">
              <b>Nombre: </b> {user.nombre}
            </span>
            <span className="text-start">
              <b>Propiedad: </b> {user.propiedad}
            </span>
            <span className="text-start">
              <b>Identificación: </b> {user.id}
            </span>
            <span className="text-start">
              <b>Celular: </b> {user.celular}
            </span>
            <span className="text-start">
              <b>Cargo: </b> {user.cargo}
            </span>
            <span className="text-start">
              <b>Centro </b>de Costos: {user.centrocostos}
            </span>
          </div>
          <div className="col-span-5 flex flex-col justify-start">
            <span className="text-start">
              <b>Centro Logístico: </b> {user.centrologistico}
            </span>
            <span className="text-start">
              <b>Sede: </b>
              {user.sede}
            </span>
            <span className="text-start">
              <b>Dirección: </b>
              {user.direccion}
            </span>
            <span className="text-start">
              <b>Ubicación: </b>
              {user.ciudad}
            </span>
            <span className="text-start">
              <b>Modalidad de trabajo: </b> {user.modalidad}
            </span>
            <span className="text-start">
              <b>Facilidades operativas: </b> {user.facilidades}
            </span>
            <span className="text-start">
              <b>Tipo de contrato: </b> {user.tipocontrato}
            </span>
          </div>
          <div className="col-span-1"></div>
        </div>
      ) : (
        <div className="py-10 flex justify-center items-center h-20 bg-gray-300 rounded-md">
          <span>
            Ingresa una Cédula o un Serial para mostrar Información
          </span>
        </div>
      )}
    </>
  );
};
