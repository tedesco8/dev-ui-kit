import React from "react";
import { Select } from "./style";

const DevSelect = ({
  id,
  name,
  value,
  onChange,
  required,
  placeholder,
  children,
}) => {
  return (
    <Select
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    >
      {children}
    </Select>
  );
};

export default DevSelect;
