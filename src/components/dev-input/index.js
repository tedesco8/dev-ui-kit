import React from "react";
import { Input } from "./style";

const DevInput = ({
  id,
  type,
  name,
  value,
  onClick,
  onChange,
  required,
  placeholder,
  children,
}) => {
  return (
    <Input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      onClick={onClick}
      onChange={onChange}
    >
      {children}
    </Input>
  );
};

export default DevInput;
