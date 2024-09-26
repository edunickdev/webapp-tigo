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
export default function ButtonModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly className="bg-blue-700 rounded-md">
        <IoEye className="text-white" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xs">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Informacion</p>
              </ModalHeader>
              <ModalBody>
                <span><b>Nombre Usuario:</b></span>
                <span><b>Propiedad: </b></span>
                <span><b># Identificación: </b></span>
                <span><b># Celular: </b></span>
                <span><b>Cargo: </b></span>
                <span><b>Centro de costos: </b></span>
                <span><b>Centro logistico: </b></span>
                <span><b>Sede: </b></span>
                <span><b>Dirección: </b></span>
                <span><b>Ubicación: </b></span>
                <span><b>Jefe Inmediato: </b></span>
                <span><b>Gerencia: </b></span>
                <span><b>Usuario de red: </b></span>
                <span><b>Modalidad de trabajo: </b></span>
                <span><b>Facilidades Operativas: </b></span>
                <span><b>Tipo de contrato: </b></span>

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
