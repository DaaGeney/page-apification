import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";


export const CustomGrid = styled.div<{
  color?: string;
  height?: string;
  width?: string;
}>`
  align-items: center;
  background-color: ${(props) => props.color};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;
  height: ${(props) => props.height};
  justify-content: center;
  width: ${(props) => props.width};
`;

export const CustomButton = styled(Button)`
  && {
    color: white;
    background-color: #3f51b5;
    margin-bottom: 10px;
  }
`;

