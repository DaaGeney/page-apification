import React from "react";
import Form from "./../Form";
import { CustomGrid, CustomCard } from "./styles";

export default function Riesgo() {
  const [open, setOpen] = React.useState(false);

  return (
    <CustomGrid width="100%" height="85%">
      <Form onClose={() => setOpen(false)} open={open}></Form>
      <CustomCard onClick={() => setOpen(true)} width="400px" height="80px">
        CREAR RIESGO
      </CustomCard>
      <CustomCard>Diego 2</CustomCard>
      <CustomCard>Diego 3</CustomCard>
      <CustomCard>Diego 4</CustomCard>
    </CustomGrid>
  );
}
