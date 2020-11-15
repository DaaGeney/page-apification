import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const CustomGrid = styled(Grid)<{
  color?: string;
  height?: string;
  width?: string;
}>`
  && {
    align-items: center;
    background-color: ${(props) => props.color};
    display: flex;
    font-size: 32px;
    height: ${(props) => props.height};
    justify-content: center;
    margin-top: 10px;
    position: absolute;
    width: ${(props) => props.width};
  }
`;
export const CustomForm = styled.form<{
  color?: string;
  height?: string;
  width?: string;
}>`
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
