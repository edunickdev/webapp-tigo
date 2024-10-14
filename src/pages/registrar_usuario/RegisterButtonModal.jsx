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
import { IoCreateSharp } from "react-icons/io5";
import CustomInput from "../../components/custom_input";
import CustomSelectInput from "../../components/CustomSelectInput";
import { useUserStore } from "../../context/stores";
import { useState } from "react";

const RegisterButtonModal = ({ inputs }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const createUser = useUserStore((state) => state.createUser);

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(formData);
    setFormData({});
    onOpenChange(false);
  };

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
        size="4xl"
        className="h-5/6"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl text-center">
                Registro de usuario
              </ModalHeader>
              <ModalBody className="grid grid-cols-12 overflow-y-auto">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white w-full grid grid-cols-12 col-span-12 p-2 gap-4"
                >
                  <div className="col-span-6 flex flex-col justify-start gap-4">
                    <CustomInput
                      item="Nombre del usuario"
                      onChange={handleInputChange}
                      name="nombre"
                      value={formData.nombre || ""}
                    />
                    <CustomSelectInput
                      item="Propiedad"
                      onChange={handleSelectChange}
                      name="propiedad"
                      options={["Colsubsidio", "PCCOM", "Otros"]}
                      value={formData.propiedad || ""}
                    />
                    <CustomSelectInput
                      item="Modalidad de trabajo"
                      onChange={handleSelectChange}
                      name="modalidad"
                      options={[
                        "Presencial",
                        "Teletrabajo Autónomo",
                        "Teletrabajo Suplementario",
                      ]}
                      value={formData.modalidad || ""}
                    />
                    <CustomSelectInput
                      item="Facilidades operativas"
                      onChange={handleSelectChange}
                      name="facilidades"
                      options={["Carnet", "Tarjeta de acceso", "Otros"]}
                      value={formData.facilidades || ""}
                    />
                    <CustomSelectInput
                      item="Tipo de contrato del usuario"
                      onChange={handleSelectChange}
                      name="tipocontrato"
                      options={[
                        "Trabajador",
                        "Estudiante en práctica",
                        "Contratista",
                      ]}
                      value={formData.tipocontrato || ""}
                    />
                  </div>
                  <div className="col-span-6">
                    {inputs.map((item, index) => (
                      <div key={index} className="mb-4">
                        <CustomInput
                          item={item.text}
                          onChange={handleInputChange}
                          name={item.name}
                          value={formData[item.name] || ""}
                        />
                      </div>
                    ))}
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="bordered"
                  color="primary"
                  className="col-span-6 text-xl mt-4"
                  type="submit"
                >
                  Crear
                </Button>
                <Button
                  variant="solid"
                  color="danger"
                  className="col-span-6 text-xl mt-4"
                  onPress={() => {
                    onClose();
                  }}
                >
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

export default RegisterButtonModal;
