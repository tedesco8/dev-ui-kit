import styled from "styled-components";

const Select = styled.select`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: var(--black2);
  margin-bottom: 0.9rem;
  border-radius: 10px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);

  option {
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 11px 13px;
  }

  :invalid:required {
    border: 1px solid red;
  }
  :valid {
    border: 1px solid green;
  }
`;

export { Select };
