import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputGroup = styled.div`
  position: relative;
  @media (max-width: 768px) {
    padding-bottom: 5px !important;
  }
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: ${(props) => (props.color ? props.color : 'var(--black2)')};
  margin-bottom: 0.9rem;
  border-radius: 10px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  ${(props) =>
    props.isValid === 'true' &&
    css`
      border: 1px solid hsl(112, 66%, 52%);
    `}

  ${(props) =>
    props.isValid === 'false' &&
    css`
      border: 1px solid hsl(351, 98%, 49%) !important;
    `}

    ${(props) =>
    props.inline &&
    css`
      border-radius: 10px 0 0 10px !important;
    `}
`;

const Label = styled.label`
  font-size: 19px;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  display: block;
  @media (max-width: 768px) {
    font-size: 10pt;
  }
`;

const IconValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 1;
  font-size: 16px;
  color: hsl(112, 66%, 52%);
  opacity: 0;
  ${(props) =>
    props.isValid === 'true' &&
    css`
      opacity: 1;
      color: hsl(112, 66%, 52%);
    `}

  ${(props) =>
    props.isValid === 'false' &&
    css`
      opacity: 1;
      color: hsl(351, 98%, 49%);
    `}

  @media (max-width: 768px) {
    bottom: 15px;
  }
`;

const FeedbackError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: hsl(351, 98%, 49%);
  display: none;
  ${(props) =>
    props.isValid === 'false' &&
    css`
      display: block;
    `}
`;

export { Input, InputGroup, Label, IconValidation, FeedbackError };
