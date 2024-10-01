/* eslint-disable react/prop-types */
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { IoCreateSharp } from "react-icons/io5";
import CustomInput from "../../components/custom_input";

const RegisterButtonModal = ({ inputs }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        onPress={onOpen}
        className="bg-yellow-500 text-white rounded mx-1"
      >
        <IoCreateSharp />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        className="overflow-y-scroll p-10"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="grid grid-cols-12">
                <h2 className="col-span-12 text-4xl text-gray-700 text-center mb-5">
                  Edición
                </h2>
                <form className="bg-white w-full col-span-6 p-2">
                  <div className="space-y-4">
                    <CustomInput item={"Nombre del usuario"} />
                    <label className="block text-sm font-medium text-gray-700 mt-20">
                      Propiedad
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      name="propiedad"
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="opcion1">Colsubsidio</option>
                      <option value="opcion2">PCCOM</option>
                      <option value="opcion3">Otros</option>
                    </select>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Modalidad de trabajo
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        name="modalidad"
                        required
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="opcion1">Presencial</option>
                        <option value="opcion2">Teletrabajo Autónomo</option>
                        <option value="opcion3">
                          Teletrabajo Suplementario
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Facilidades operativas
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        name="operativas"
                        required
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="opcion1">Carnet</option>
                        <option value="opcion2">Tarjeta de acceso</option>
                        <option value="opcion3">Otros</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Tipo de contrato del usuario
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        name="contrato"
                        required
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="opcion1">Trabajador</option>
                        <option value="opcion2">Estudiante en práctica</option>
                        <option value="opcion3">Contratista</option>
                      </select>
                    </div>
                  </div>
                </form>

                <form className="col-span-6 p-2">
                  {inputs.map((item) => (
                    <div key={item.name}>
                      <label className="px-5 text-sm font-medium text-gray-700">
                        {item.text}
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        name={item.name}
                      />
                    </div>
                  ))}
                </form>

                <Button
                  variant="bordered"
                  color="primary"
                  className="col-span-6 text-xl mt-4"
                >
                  Crear
                </Button>
                <Button
                  variant="solid"
                  color="danger"
                  className="col-span-6 text-xl mt-4"
                  onPress={onClose}
                >
                  Cancelar
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterButtonModal;
