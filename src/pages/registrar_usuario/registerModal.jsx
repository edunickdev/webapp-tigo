/* eslint-disable react/prop-types */
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { IoEye } from "react-icons/io5";
export default function ButtonModal({ user }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly className="bg-blue-700 rounded-md">
        <IoEye className="text-white" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Informacion</p>
              </ModalHeader>
              <ModalBody>
                <span>
                  <b>Nombre: {user.nombre}</b>
                </span>
                <span>
                  <b>Propiedad: {user.propiedad}</b>
                </span>
                <span>
                  <b>Identificacion: {user.nDoc} </b>
                </span>
                <span>
                  <b>Celular: {user.celular} </b>
                </span>
                <span>
                  <b>Cargo: {user.cargo} </b>
                </span>
                <span>
                  <b>Centro de costos: {user.centrocostos} </b>
                </span>
                <span>
                  <b>Centro logístico: {user.centrologistico} </b>
                </span>
                <span>
                  <b>Sede: {user.sede} </b>
                </span>
                {/* <span>
                  <b>{user.direccion} </b>
                </span> */}
                <span>
                  <b>Jefe: {user.jefe} </b>
                </span>
                <span>
                  <b>Gerencia: {user.gerencia} </b>
                </span>
                <span>
                  <b>Usuario Red: {user.usuariored} </b>
                </span>
                <span>
                  <b>Modalidad: {user.modalidad} </b>
                </span>
                <span>
                  <b>Facilidades: {user.facilidades} </b>
                </span>
                <span>
                  <b>Tipo de contrato: {user.tipocontrato} </b>
                </span>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
