import styled from "styled-components";

const DevButtonStyled = styled.button`
  width: ${props => props.width ? props.width : "140px"};
  height: ${props => props.height ? props.height : "45px"};
  margin: ${props => props.margin ? props.margin : "5px"};
  font-size: ${props => props.fontSize ? props.fontSize : "18px"};
  font-weight: ${props => props.fontWeight ? props.fontWeight : "500"};
  letter-spacing: 2.5px;
  background-color: ${props => props.bgColor ? props.bgColor : "#119ada"};
  color:  ${props => props.color ? props.color : "#fff"};
  border: none;
  border-radius: ${props => props.borderRadius ? props.borderRadius : "45px"};
  box-shadow: ${props => props.boxShadow ? props.boxShadow : "0px 8px 15px #999"};
  transition: ${props => props.transition ? props.transition : "all 0.3s ease 0s"};
  cursor: pointer;
  outline: none;
  :hover {
    box-shadow: ${props => props.boxShadowHover ? props.boxShadowHover : "0px 15px 20px #38ace3"};
    transform: ${props => props.transformHover ? props.transformHover : "translateY(-7px)"};
  }
`;

export { DevButtonStyled };
