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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Nombre usuario registrado
              </ModalHeader>
              <ModalBody>
                <span>Incididunt eu anim fugiat cillum.</span>
                <span>Adipisicing laborum non nulla proident fugiat ad.</span>
                <span>Deserunt sunt fugiat pariatur.</span>
                <span>Deserunt sunt fugiat pariatur.</span>
                <span>Deserunt sunt fugiat pariatur.</span>
                <span>Deserunt sunt fugiat pariatur.</span>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
