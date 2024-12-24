/* eslint-disable react/prop-types */

import { Input } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { useUserStore } from "../../context/stores";

// mediante `react-hook-form` y los componentes `Input` de `@nextui-org/react` Permite definir validaciones 
// específicas y comportamiento dinámico

const InputControlled = ({ inputs, control, action }) => {
  const user = useUserStore((state) => state.user);

  return (
    <>
      {inputs.map((input, index) => (
        <Controller
          key={index}
          name={input.name}
          control={control}
          rules={
            !user                   //Si no hay un usuario definido (!user), se aplican reglas como required, minLength y maxLength
              ? {
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Este campo debe tener al menos 1 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "Este campo debe tener máximo 30 caracteres",
                },
              }
              : {}
          }
          render={({ field }) => (
            <Input
              isRequired
              {...field}
              isDisabled={action === "view" ? true : false}
              variant="bordered"
              color="primary"
              label={input.text}
              placeholder={user ? input.value : `Ingresa tu ${input.text}`}
              value={field.value}
              defaultValue={user ? input.value : ""}
              onValueChange={field.onChange}
            />
          )}
        />
      ))}
    </>
  );
};

export default InputControlled;
