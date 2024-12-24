import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useUserStore } from "../../context/stores";

/**
 * DeleteButtonModal - Componente que muestra un modal de confirmación para eliminar un usuario.
 * 
 * Este componente muestra un botón con un icono que, al ser presionado, abre un modal donde se 
 * le pregunta al usuario si está seguro de eliminar a otro usuario. Si el usuario confirma, 
 * se llama a la función `deleteUser` para eliminar al usuario de la base de datos o contexto.
 * 
 * Funcionalidades:
 * - Muestra un botón que abre un modal de confirmación.
 * - El modal tiene dos opciones: eliminar o cancelar.
 * - Al confirmar la eliminación, el usuario es eliminado y el modal se cierra.
 */
const DeleteButtonModal = ({icon, classname, enable}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();  // Controla la visibilidad del modal
  const deleteUser = useUserStore((state) => state.deleteUser);  // Función para eliminar al usuario
  const user = useUserStore((state) => state.user);  // Usuario que será eliminado

  return (
    <>
      {/* Botón que abre el modal */}
      <Button 
        isIconOnly 
        onPress={onOpen} 
        className={classname}
        isDisabled={enable} // Habilita o deshabilita el botón
      >
        {icon} {/* Icono que se muestra en el botón */}
      </Button>

      {/* Modal de confirmación */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ¿Estás seguro de eliminar este usuario? {/* Título del modal */}
              </ModalHeader>
              <ModalFooter>
                {/* Botón para eliminar el usuario */}
                <Button 
                  color="danger" 
                  variant="light" 
                  onPress={() => {
                    deleteUser(user);  // Llama a la función para eliminar al usuario
                    onClose();  // Cierra el modal después de la eliminación
                  }}
                >
                  Eliminar
                </Button>

                {/* Botón para cancelar la eliminación */}
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
