import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const CustomButton = styled(Button)<{ backgroundColor: string }>`
  && {
    background-color: ${(props) => props.backgroundColor};
  }
`;
