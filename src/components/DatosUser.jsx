import { Accordion, AccordionItem } from "@nextui-org/react";
import { useUserStore } from "../context/stores";
import React, { useState } from 'react';


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
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Nombre del usuario: </b> {user.nombre}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Propiedad del equipo: </b> {user.propiedad}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700"># Identificación: </b> {user.id}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700"># Celular: </b> {user.celular}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Cargo: </b> {user.cargo}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Centro de Costos: </b>{user.centrocostos}
            </span>
          </div>
          <div className="col-span-5 flex flex-col justify-start">
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Centro Logístico: </b> {user.centrologistico}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Sede: </b>
              {user.sede}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Dirección: </b>
              {user.direccion}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Ubicación: </b>
              {user.ciudad}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Modalidad de trabajo: </b> {user.modalidad}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Facilidades operativas: </b> {user.facilidades}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Tipo de contrato de usuario: </b> {user.tipocontrato}
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
