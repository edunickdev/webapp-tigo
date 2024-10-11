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
import { useUserStore } from "../../context/stores";
export default function ButtonModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const user = useUserStore((state) => state.user);

  return (
    <>
      <Button
        onPress={onOpen}
        isIconOnly
        className="bg-blue-700 rounded-md"
        isDisabled={!user}
      >
        <IoEye className="text-white" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        className="h-5/6"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl text-center">
                Ver usuario
              </ModalHeader>
              <ModalBody className="overflow-y-auto">
                <span>
                  <b>Nombre: {user.nombre}</b>
                </span>
                <span>
                  <b>Propiedad: {user.propiedad}</b>
                </span>
                <span>
                  <b>Identificacion: {user.id} </b>
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
