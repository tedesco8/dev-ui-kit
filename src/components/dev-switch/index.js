import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./style";
const DevSwitch = ({ label, onChange }) => {
  <CheckBoxWrapper>
    <CheckBox id="checkbox" type="checkbox" onChange={onChange} />
    <CheckBoxLabel htmlFor={label} />
  </CheckBoxWrapper>;
};

export default DevSwitch;
