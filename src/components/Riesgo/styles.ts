import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

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

export const CustomCard = styled(Card)<{
  color?: string;
  height?: string;
  width?: string;
}>`
  && {
    background-color: ${(props) => props.color};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    font-size: 32px;
    cursor: pointer;
    padding: 20px;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }
`;