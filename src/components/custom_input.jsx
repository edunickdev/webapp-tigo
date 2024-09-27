/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/react";

const CustomInput = ({ item }) => {
  return (
    <div className="">
      <span className="text-center">{item}</span>
      <Input type="text" labelPlacement="inside" variant="bordered" />
    </div>
  );
};

export default CustomInput;
