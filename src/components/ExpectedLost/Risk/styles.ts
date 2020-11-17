import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const CustomCard = styled(Card)`
  && {
    margin: auto;
    width: 60%;
    margin-bottom: 20px;
  }
  & .MuiCardActions-root {
    flex-direction: row-reverse;
  }
`;