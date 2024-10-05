/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/react";

const CustomInput = ({ item, value }) => {
  return (
    <div className="">
      <span className="text-center">{item}</span>
      <Input
        type="text"
        labelPlacement="inside"
        variant="bordered"
        value={value}
      />
    </div>
  );
};

export default CustomInput;
