import React from 'react';
import { PropTypes } from 'prop-types';
import { DevButtonStyled } from './style';

const DevButton = ({
  type,
  width,
  height,
  margin,
  fontSize,
  fontWeight,
  bgColor,
  color,
  borderRadius,
  boxShadow,
  transition,
  boxShadowHover,
  transformHover,
  onClick,
  children,
}) => {
  return (
    <DevButtonStyled
      type={type}
      width={width}
      height={height}
      margin={margin}
      fontSize={fontSize}
      fontWeight={fontWeight}
      bgColor={bgColor}
      color={color}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      transition={transition}
      boxShadowHover={boxShadowHover}
      transformHover={transformHover}
      onClick={onClick}
    >
      {children}
    </DevButtonStyled>
  );
};

export default DevButton;

DevButton.PropTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  transition: PropTypes.string,
  boxShadowHover: PropTypes.string,
  transformHover: PropTypes.string,
  onClick: PropTypes.func,
};
