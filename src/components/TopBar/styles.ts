import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const CustomButton = styled(Button)`
  && {
    color: white;
  }
`;

export const CustomForm = styled.div<{
}>`
  flex-grow: 1,
`;
