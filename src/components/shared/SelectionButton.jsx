/* eslint-disable react/prop-types */
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { useUserStore } from "../../context/stores";

const SelectionButton = ({ name, control, options }) => {
  const user = useUserStore((state) => state.user);

  return (
    <Controller
      name={name.name}
      control={control}
      render={({ field }) => (
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" color="primary" className="w-full">
              {field.value !== undefined
                ? options[field.value - 1].text
                : `Selecciona ${name.text}`}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            selectionMode="single"
            selectedKeys={[]}
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
