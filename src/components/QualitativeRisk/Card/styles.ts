import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const CustomCard = styled(Card)`
  && {
    margin: auto;
    width: 800px;
    margin-bottom: 20px;
    align-items: center;
  }
  & .MuiCardActions-root {
    flex-direction: row-reverse;
  }
`;
