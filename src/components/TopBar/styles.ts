import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

export const CustomAppBar = styled(AppBar)`
  && {
    border-radius: 30px;
  }
`;

export const CustomButton = styled(Button)`
  && {
    color: white;
  }
`;

export const CustomDiv = styled.div<{
}>`
  width: 300px,
`;
