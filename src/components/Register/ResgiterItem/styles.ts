import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const CustomCard = styled(Card)`
  && {
    margin: auto;
    width: 60%;
    margin-bottom: 20px;
    @media only screen and (max-width: 600px) {
      width: 80%;
    }
  }
  & .MuiCardActions-root {
    flex-direction: row-reverse;
  }
`;
