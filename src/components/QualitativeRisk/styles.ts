import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const CustomGrid = styled.div<{
  color?: string;
  height?: string;
  width?: string;
}>`
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.color};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  justify-items: center;
`;

export const CustomButton = styled(Button)`
  && {
    grid-column:1;
    width: fit-content;
    color: white;
    background-color: #3f51b5;
    margin-bottom: 10px;
  }
`;
