import React from "react";
import Form from "./../Form";
import Map from "./../Map"
import Alert from "../Alert";
import { CustomGrid, CustomCard } from "./styles";

export default function Riesgo() {
  const [open, setOpen] = React.useState(false);
  const [openMap, setOpenMap] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState("");
  // const [typeSnack, setTypeSnack] = React.useState("");

  const handleSnackStatus = () => setOpenSnack(true);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  return (
    <CustomGrid width="100%" height="85%">
      <Form onClose={() => setOpen(false)} open={open} activeAlert={handleSnackStatus} messageAlert={(e: any)=>setSnackMessage(e)} ></Form>
      <Map onClose={() => setOpenMap(false)} open={openMap} />
      <Alert
        open={openSnack}
        handleClick={handleSnackStatus}
        handleClose={handleClose}
        type={'success'}
      >
        {snackMessage}
      </Alert>
      <CustomCard onClick={() => setOpen(true)} >
        CREAR RIESGO
      </CustomCard>
      <CustomCard onClick={() => setOpenMap(true)}>DESCARGAR MAPA</CustomCard>
      <CustomCard>DESCARGAR REPORTE</CustomCard>
    </CustomGrid>
  );
}
