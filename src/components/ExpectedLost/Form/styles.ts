import styled from "styled-components";

export const CustomForm = styled.form<{
  color?: string;
  height?: string;
  width?: string;
}>`
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
