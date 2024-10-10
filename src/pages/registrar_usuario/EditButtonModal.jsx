/* eslint-disable react/prop-types */
import { MdEdit } from "react-icons/md";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import CustomInput from "../../components/custom_input";
import { useUserStore } from "../../context/stores";
import { useState, useEffect } from "react";
import { compareAndUpdateUser } from "../../services/employee_services/UserServices";
import CustomSelectInput from "../../components/CustomSelectInput";

const EditButtonModal = ({ inputs }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    onOpenChange(false);
  };

  return (
    <>
      <Button
        isIconOnly
        onPress={onOpen}
        className="bg-green-700 text-white rounded mx-1"
        isDisabled={!user}
      >
        <MdEdit className="text-white" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="h-5/6">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl text-center">Edición</ModalHeader>
              <ModalBody className="overflow-y-auto">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white w-full grid grid-cols-12 col-span-12 p-2 gap-4"
                >
                  <div className="col-span-6 flex flex-col justify-start gap-4">
                    <CustomInput
                      item="Nombre del usuario"
                      onChange={handleInputChange}
                      name="nombre"
                    />
                    <CustomSelectInput
                      item="Propiedad"
                      value={formData.propiedad || ''}
                      onChange={(value) => handleSelectChange('propiedad', value)}
                      name="propiedad"
                      options={["Colsubsidio", "PCCOM", "Otros"]}
                    />
                    <CustomSelectInput
                      item="Modalidad de trabajo"
                      value={formData.modalidad || ''}
                      onChange={(value) => handleSelectChange('modalidad', value)}
                      name="modalidad"
                      options={[
                        "Presencial",
                        "Teletrabajo Autónomo",
                        "Teletrabajo Suplementario",
                      ]}
                    />
                    <CustomSelectInput
                      item="Facilidades operativas"
                      value={formData.facilidades || ''}
                      onChange={(value) => handleSelectChange('facilidades', value)}
                      name="facilidades"
                      options={["Carnet", "Tarjeta de acceso", "Otros"]}
                    />
                    <CustomSelectInput
                      item="Tipo de contrato del usuario"
                      value={formData.tipocontrato || ''}
                      onChange={(value) => handleSelectChange('tipocontrato', value)}
                      name="tipocontrato"
                      options={[
                        "Trabajador",
                        "Estudiante en práctica",
                        "Contratista",
                      ]}
                    />
                  </div>
                  <div className="col-span-6">
                    {inputs.map((item, index) => (
                      <div key={index} className="mb-4">
                        <CustomInput
                          item={item.text}

                          onChange={handleInputChange}
                          name={item.name}
                        />
                      </div>
                    ))}
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  variant="bordered"
                  color="primary"
                  className="text-xl mt-4"
                  onPress={() => {
                    compareAndUpdateUser(user, formData);
                    onClose();
                  }}
                >
                  Actualizar
                </Button>
                <Button
                  onPress={onClose}
                  variant="solid"
                  color="danger"
                  className="text-xl mt-4"
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

export default EditButtonModal;
