import React from 'react';
import {
  InputGroup,
  Input,
  Label,
  FeedbackError,
  IconValidation,
} from './style';

import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const DevInput = ({
  id,
  type,
  name,
  placeholder,
  color,
  state,
  regex,
  errorMsg,
  nonLabel,
  handleChange,
  children,
}) => {
  const onChange = (e) => {
    handleChange({ ...state, value: e.target.value });
  };

  const validation = () => {
    if (regex) {
      if (regex.test(state.value)) {
        handleChange({ ...state, isValid: 'true' });
        return;
      }
      handleChange({ ...state, isValid: 'false' });
    }
  };
  return (
    <>
      {!nonLabel && <Label htmlFor={id}>{name}:</Label>}
      <InputGroup>
        <Input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          color={color}
          value={state.value}
          isValid={state.isValid}
          onBlur={validation}
          onKeyUp={validation}
          onChange={onChange}
        >
          {children}
        </Input>
        <IconValidation
          icon={state.isValid === 'true' ? faCheckCircle : faTimesCircle}
          isValid={state.isValid}
        />
      </InputGroup>
      <FeedbackError isValid={state.isValid}>{errorMsg}</FeedbackError>
    </>
  );
};

export default DevInput;
