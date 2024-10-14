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
import { inputs, select_inputs } from "../../helpers/constants";
import SelectionButton from "../../components/shared/SelectionButton";
import InputControlled from "../../components/shared/InputControlled";
import { useUserStore } from "../../context/stores";

const FormButtonComponent = ({ icon, className, enable, action }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { control, handleSubmit } = useForm();
  const user = useUserStore((state) => state.user);
  const createUser = useUserStore((state) => state.createUser);
  const updateUser = useUserStore((state) => state.updateUser);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        if (action === "create") {
          createUser(data);
        } else {
          updateUser(data);
        }
      })}
    >
      <Button
        isIconOnly
        onPress={onOpen}
        className={className}
        isDisabled={user ? false : enable}
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
                {action === "create" ? "Registro de usuario" : "Editar usuario"}
              </ModalHeader>
              <ModalBody className="grid grid-cols-12 overflow-y-scroll">
                <div className="col-span-4 flex flex-col justify-start items-center mt-8 gap-y-5">
                  <InputControlled
                    inputs={inputs.slice(0, 6)}
                    control={control}
                  />
                </div>
                <div className="col-span-4 flex  flex-col justify-start items-center mt-8 gap-y-5">
                  <InputControlled
                    inputs={inputs.slice(6, 12)}
                    control={control}
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
                <Button
                  color="success"
                  variant="ghost"
                  className="w-36"
                  onPress={handleSubmit(async (data) => {
                    if (action === "create") {
                      createUser(data);
                    } else {
                      updateUser(data);
                    }
                  })}
                >
                  {action ? "Crear" : "Guardar"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
};

export default FormButtonComponent;
