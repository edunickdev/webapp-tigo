import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

/* eslint-disable react/prop-types */
const CustomSelectInput = ({ item, value, onChange, name, options }) => {
  return (
    <>
      <span className="text-center">{item}</span>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="w-full">
            {value || "Select an option"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          selectionMode="single"
          selectedKeys={value ? [value] : []}
          onSelectionChange={(selected) => {
            const selectedValue = Array.from(selected).join("");
            onChange(name, selectedValue);
          }}
          items={options}
        >
          {(item) => (
            <DropdownItem key={item} value={item}>
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default CustomSelectInput;
