import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const RiskContainer = styled.div`
  height: 100%;
  padding-top: 5%;
  width: 100%;
  text-align: center;
`;

export const CustomButton = styled(Button)`
  && {
    color: white;
    background-color: #3f51b5;
    margin-bottom: 10px;
  }
`;
