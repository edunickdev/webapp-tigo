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

/**
 * FormButtonComponent - Componente reutilizable que muestra un formulario en un modal para crear, editar o visualizar un usuario.
 * 
 * Este componente es usado para mostrar un modal con un formulario que puede ser utilizado para crear, editar o ver información de un usuario.
 * El formulario maneja la lógica de validación y envío de datos utilizando `react-hook-form` y el estado global de los usuarios a través del contexto `useUserStore`.
 * 
 * Propiedades:
 * - `icon`: El icono que se mostrará en el botón para abrir el modal.
 * - `className`: La clase CSS personalizada que se aplica al botón.
 * - `enable`: Propiedad booleana que determina si el botón está habilitado o no.
 * - `action`: String que indica la acción que se realizará con el formulario. Puede ser `"create"`, `"edit"`, o `"view"`.
 * 
 * Funcionalidades:
 * - Muestra un botón que abre un modal.
 * - El modal puede tener tres estados diferentes según la acción:
 *   - **Crear usuario**: Muestra un formulario vacío para crear un nuevo usuario.
 *   - **Editar usuario**: Muestra un formulario pre-llenado con los datos del usuario y permite editar estos datos.
 *   - **Ver usuario**: Muestra un formulario con datos de solo lectura (sin permitir cambios).
 * - Utiliza el contexto `useUserStore` para interactuar con los datos de los usuarios (crear y actualizar).
 * - Utiliza `react-hook-form` para gestionar la validación y envío del formulario.
 * 
 * Componentes internos:
 * - `InputControlled`: Componente que controla los campos de entrada de texto.
 * - `SelectionButton`: Componente que muestra botones de selección para opciones adicionales de entrada.
 * 
 * Acciones:
 * - Si la acción es `"create"`, el formulario envía los datos del nuevo usuario a la función `createUser` del contexto.
 * - Si la acción es `"edit"`, el formulario envía los datos actualizados del usuario a la función `updateUser`.
 * - Si la acción es `"view"`, el formulario solo muestra los datos del usuario sin permitir modificaciones.
 */
const FormButtonComponent = ({ icon, className, enable, action }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure(); // Controla la visibilidad del modal
  const { control, handleSubmit } = useForm(); // Control de formularios usando react-hook-form
  const user = useUserStore((state) => state.user); // Obtiene el usuario desde el estado global
  const createUser = useUserStore((state) => state.createUser); // Función para crear un nuevo usuario
  const updateUser = useUserStore((state) => state.updateUser); // Función para actualizar un usuario
  const inputs = useUserStore((state) => state.inputs); // Obtiene los campos de entrada desde el estado global

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        // Enviar datos según la acción
        if (action === "create") {
          createUser(data); // Crea un nuevo usuario
        } else {
          updateUser(user, data); // Actualiza el usuario existente
        }
      })}
    >
      {/* Botón para abrir el modal */}
      <Button
        isIconOnly
        onPress={onOpen} // Abre el modal
        className={className}
        isDisabled={enable} // Deshabilita el botón si es necesario
      >
        {icon} {/* Icono del botón */}
      </Button>

      {/* Modal de formulario */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        className="h-5/6"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* Título del modal dependiendo de la acción */}
              <ModalHeader className="flex flex-col gap-1 text-3xl">
                {action === "create"
                  ? "Registro de usuario"
                  : action === "view"
                  ? "Información del usuario"
                  : "Editar usuario"}
              </ModalHeader>
              
              {/* Cuerpo del modal con formulario */}
              <ModalBody className="grid grid-cols-12 overflow-y-scroll">
                <div className="col-span-4 flex flex-col justify-start items-center mt-8 gap-y-5">
                  {/* Componentes de entrada para la primera sección */}
                  <InputControlled
                    inputs={inputs.slice(0, 6)}
                    control={control}
                    action={action}
                  />
                </div>
                <div className="col-span-4 flex flex-col justify-start items-center mt-8 gap-y-5">
                  {/* Componentes de entrada para la segunda sección */}
                  <InputControlled
                    inputs={inputs.slice(6, 12)}
                    control={control}
                    action={action}
                  />
                </div>
                <div className="col-span-4 flex flex-col justify-start items-center mt-8 gap-y-5">
                  {/* Botones de selección de opciones adicionales */}
                  {select_inputs.map((select_input, index) => (
                    <SelectionButton
                      user={user}
                      key={index}
                      name={select_input}
                      control={control}
                      options={select_input.options}
                      action={action}
                    />
                  ))}
                </div>
              </ModalBody>

              {/* Pie del modal con botones de acción */}
              <ModalFooter>
                <Button
                  color="primary"
                  variant="ghost"
                  onPress={onClose} // Cierra el modal
                  className="w-36"
                >
                  Cancelar
                </Button>
                {/* Botón de acción dependiendo de la operación */}
                {action === "view" ? null : (
                  <Button
                    color="success"
                    variant="ghost"
                    className="w-36"
                    onPress={handleSubmit(async (data) => {
                      if (action === "create") {
                        createUser(data); // Crear usuario
                      } else {
                        updateUser(user, data); // Actualizar usuario
                      }
                    })}
                  >
                    {action === "create"
                      ? "Crear"
                      : action === "edit"
                      ? "Guardar"
                      : ""}
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
