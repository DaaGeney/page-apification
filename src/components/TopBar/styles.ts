import styled from "styled-components";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";

export const CustomAppBar = styled(AppBar)`
  && {
    border-radius: 30px;
  }
`;

export const CustomButton = styled(Button)`
  && {
    color: white;
    position: absolute;
    right: 10px;
  }
`;

export const CustomIconButton = styled(IconButton)`
  && {
    position: absolute;
    right: 10px;
  }
`;

export const CustomDiv = styled.div`
  width: 300px;
`;
