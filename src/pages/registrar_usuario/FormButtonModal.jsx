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
import { useForm } from "react-hook-form";
import { select_inputs } from "../../helpers/constants";
import SelectionButton from "../../components/shared/SelectionButton";
import InputControlled from "../../components/shared/InputControlled";
import { useUserStore } from "../../context/stores";

const FormButtonComponent = ({ icon, className, enable, action }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { control, handleSubmit } = useForm();
  const user = useUserStore((state) => state.user);
  const createUser = useUserStore((state) => state.createUser);
  const updateUser = useUserStore((state) => state.updateUser);
  const inputs = useUserStore((state) => state.inputs);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        if (action === "create") {
          createUser(data);
        } else {
          updateUser(user, data);
        }
      })}
    >
      <Button
        isIconOnly
        onPress={onOpen}
        className={className}
        isDisabled={enable}
      >
        {icon}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        className="h-5/6"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl">
                {action === "create"
                  ? "Registro de usuario"
                  : action === "view"
                  ? "Información del usuario"
                  : "Editar usuario"}
              </ModalHeader>
              <ModalBody className="grid grid-cols-12 overflow-y-scroll">
                <div className="col-span-4 flex flex-col justify-start items-center mt-8 gap-y-5">
                  <InputControlled
                    inputs={inputs.slice(0, 6)}
                    control={control}
                    action={action}
                  />
                </div>
                <div className="col-span-4 flex  flex-col justify-start items-center mt-8 gap-y-5">
                  <InputControlled
                    inputs={inputs.slice(6, 12)}
                    control={control}
                    action={action}
                  />
                </div>
                <div className="col-span-4 flex flex-col justify-start items-center mt-8 gap-y-5">
                  {select_inputs.map((select_input, index) => (
                    <SelectionButton
                      key={index}
                      name={select_input}
                      control={control}
                      options={select_input.options}
                    />
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  variant="ghost"
                  onPress={onClose}
                  className="w-36"
                >
                  Cancelar
                </Button>
                {action === "view" ? null : (
                  <Button
                    color="success"
                    variant="ghost"
                    className="w-36"
                    onPress={handleSubmit(async (data) => {
                      if (action === "create") {
                        createUser(data);
                      } else {
                        updateUser(user, data);
                      }
                    })}
                  >
                    {action === "create"
                      ? "Crear"
                      : action === "edit"
                      ? "Guardar" : ""}
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
};

export default FormButtonComponent;
