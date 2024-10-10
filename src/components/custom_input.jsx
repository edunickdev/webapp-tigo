/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/react";

const CustomInput = ({ item, value, onChange, name }) => {
  return (
    <>
      <span className="text-center">{item}</span>
      <Input
        type="text"
        labelPlacement="inside"
        variant="bordered"
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

export default CustomInput;
