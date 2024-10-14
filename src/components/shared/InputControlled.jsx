/* eslint-disable react/prop-types */

import { Input } from "@nextui-org/react";
import { Controller } from "react-hook-form";

const InputControlled = ({ inputs, control }) => {
  return (
    <>
      {inputs.map((input, index) => (
        <Controller
          key={index}
          name={input.name}
          control={control}
          rules={{
            required: "Este campo es requerido",
            minLength: {
              value: 1,
              message: "Este campo debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 30,
              message: "Este campo debe tener máximo 50 caracteres",
            },
          }}
          render={({ field }) => (
            <Input
              isRequired
              {...field}
              variant="bordered"
              color="primary"
              label={input.text}
              placeholder={`Ingresa tu ${input.text}`}
              value={field.value}
              onValueChange={field.onChange}
            />
          )}
        />
      ))}
    </>
  );
};

export default InputControlled;
