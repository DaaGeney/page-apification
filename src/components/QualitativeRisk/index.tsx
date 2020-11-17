import React from "react";
import Form from "./Form";
import Alert from "../Alert";
import { CustomGrid, CustomButton } from "./styles";
import { getAllRisks } from "./../../api/riesgoCredito";
import MediaCard from "./Card";

export default function Riesgo() {
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [risks, setRisks] = React.useState<Array<any>>([]);
  const [snackMessage, setSnackMessage] = React.useState("");
  const [typeSnack, setTypeSnack] = React.useState("");

  React.useEffect(() => {
    getAllRisks()
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          setRisks(result.data);
        }
      });
  }, []);

  const handleSnackStatus = () => setOpenSnack(true);

  const onChangeTypeSnack = (e: string) => setTypeSnack(e);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  return (
    <CustomGrid width="100%" height="85%">
      <Form
        onClose={() => setOpen(false)}
        open={open}
        activeAlert={handleSnackStatus}
        messageAlert={(e: any) => setSnackMessage(e)}
        typeSnack={onChangeTypeSnack}
      ></Form>
      <Alert
        open={openSnack}
        handleClick={handleSnackStatus}
        handleClose={handleClose}
        type={typeSnack}
      >
        {snackMessage}
      </Alert>
      <CustomButton onClick={() => setOpen(true)}>CREAR RIESGO</CustomButton>
      {risks.length > 0 ? (
        risks.map((e) => <MediaCard body={e} key={e._id} />)
      ) : (
        <p>No hay riesgos disponibles.</p>
      )}
    </CustomGrid>
  );
}
