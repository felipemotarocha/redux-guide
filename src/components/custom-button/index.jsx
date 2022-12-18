import React from "react";

// Styles
import * as Styles from "./styles";

const CustomButton = ({ children, startIcon, ...rest }) => {
  return (
    <Styles.CustomButtonContainer {...rest}>
      {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}

      {children}
    </Styles.CustomButtonContainer>
  );
};

export default CustomButton;
