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
            
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700"># Identificación: </b> {user.identificacion}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Nombre del usuario: </b> {user.nombre}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Ciudad: </b> {user.ciudad}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Usuario de red: </b> {user.usuario_red}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Propiedad del equipo: </b> {user.propiedad_equipo_id}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700"># Celular: </b> {user.celular}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Gerencia: </b> {user.gerencia}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Cargo: </b> {user.cargo}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Centro de Costos: </b>{user.centro_costos}
            </span>
          </div>
          <div className="col-span-5 flex flex-col justify-start">
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Centro Logístico: </b> {user.centro_logistico}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Sede: </b> {user.sede}
              {user.sede}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Dirección: </b>
              {user.sede}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Ubicación: </b>
              {user.ciudad}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Modalidad de trabajo: </b> {user.modalidad_trabajo_id}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Facilidades operativas: </b> {user.facilidades_operativas_id}
            </span>
            <span className="text-start  text-neutral-950">
              <b className=" text-gray-700">Tipo de contrato de usuario: </b> {user.tipo_contrato_id}
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
