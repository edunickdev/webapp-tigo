/* eslint-disable react/prop-types */
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { useEffect } from "react";

//mediante `react-hook-form` y basado en el componente `Dropdown` de `@nextui-org/react`. 
//Permite seleccionar una opción de una lista y mostrar dinámicamente el valor seleccionado



const SelectionButton = ({ name, control, options, action, user }) => {

  useEffect(() => {
    if (user) {
      // Establece un valor inicial basado en la propiedad del usuario

      const defaultValue = options[user.propiedad - 1]?.value || 0;
      control._defaultValues[name.name] = defaultValue;
    }
  }, [user]);

  return (
    <Controller
      name={name.name}
      control={control}
      render={({ field }) => (
        <Dropdown isDisabled={action === "view"}>
          <DropdownTrigger>
            <Button
              variant="bordered"
              color="primary"
              className="w-full"
              isDisabled={action === "view"}
            >
              {field.value !== undefined && field.value !== null
                ? options[field.value - 1]?.text || `Selecciona ${name.text}`
                : `Selecciona ${name.text}`}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            selectionMode="single"
            selectedKeys={field.value ? [String(field.value)] : []}
            onSelectionChange={(selected) => {
              const selectedValue = Array.from(selected)[0];
              field.onChange(parseInt(selectedValue));
            }}
            items={options}
          >
            {(item) => (
              <DropdownItem key={item.value} value={item.value}>
                {item.text}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      )}
    />
  );
};

export default SelectionButton;
