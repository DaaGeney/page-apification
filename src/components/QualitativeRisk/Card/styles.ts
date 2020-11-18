import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const CustomCard = styled(Card)`
  && {
    margin: auto;
    width: 800px;
    margin-bottom: 20px;
    align-items: center;
    @media only screen and (max-width: 600px) {
      width: 80%;
    }
  }
  & .MuiCardActions-root {
    flex-direction: row-reverse;
  }
`;
