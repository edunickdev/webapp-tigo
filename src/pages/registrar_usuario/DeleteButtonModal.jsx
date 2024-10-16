import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useUserStore } from "../../context/stores";

const DeleteButtonModal = ({icon, classname, enable}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const deleteUser = useUserStore((state) => state.deleteUser)
  const user = useUserStore((state) => state.user)

  return (
    <>
      <Button 
        isIconOnly 
        onPress={onOpen} 
        className={classname}
        isDisabled={enable}
        >
          {icon}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ¿Estas seguro de eliminar este usuario?
              </ModalHeader>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => {
                  deleteUser(user)
                  onClose()
                }}>
                  Eliminar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteButtonModal;
