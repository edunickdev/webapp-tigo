import { Checkbox } from "@nextui-org/react";
import { useState } from "react";

export const HeaderActa = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);  
  };

  return (
    <div className="col-span-12 flex justify-center items-center p-5 gap-x-5">
      <Checkbox
        value="asignacion"
        isSelected={selected === "asignacion"}
        onValueChange={() => handleSelect("asignacion")}
      >
        Asignación
      </Checkbox>
      <Checkbox
        value="renovacion"
        isSelected={selected === "renovacion"}
        onValueChange={() => handleSelect("renovacion")}
      >
        Renovación
      </Checkbox>
      <Checkbox
        value="retiro"
        isSelected={selected === "retiro"}
        onValueChange={() => handleSelect("retiro")}
      >
        Retiro
      </Checkbox>
      <Checkbox
        value="prestamo"
        isSelected={selected === "prestamo"}
        onValueChange={() => handleSelect("prestamo")}
      >
        Préstamo
      </Checkbox>
    </div>
  );
};
