import Alert from "../Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import Form from "./Form";
import MediaCard from "./Card";
import React, { useState } from "react";
import { CustomGrid, CustomButton } from "./styles";
import { getAllRisks } from "./../../api/riesgoCredito";
import { checkUserExistance } from "../../utils/helpers";

export default function Riesgo(props: any) {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [risks, setRisks] = useState<Array<any>>([]);
  const [snackMessage, setSnackMessage] = useState("");
  const [typeSnack, setTypeSnack] = useState("");

  React.useEffect(() => {
    getAllRisks()
      .then((res) => res.json())
      .then((result) => {
        checkUserExistance(result.message, props);
        if (result.status) {
          setRisks(result.data);
        }
        setLoaded(true);
      });
  }, []);

  const onAddRisk = (newElement: object) => {
    let elements = [...risks];
    elements.push(newElement);
    setRisks(elements);
  };

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
      {loaded ? (
        <>
          <Form
            onClose={() => setOpen(false)}
            open={open}
            activeAlert={handleSnackStatus}
            messageAlert={(e: any) => setSnackMessage(e)}
            typeSnack={onChangeTypeSnack}
            addRisk={onAddRisk}
          ></Form>
          <Alert
            open={openSnack}
            handleClick={handleSnackStatus}
            handleClose={handleClose}
            type={typeSnack}
          >
            {snackMessage}
          </Alert>
          <CustomButton onClick={() => setOpen(true)}>
            CREAR RIESGO
          </CustomButton>
          {risks.length > 0 ? (
            risks.map((e) => <MediaCard body={e} key={e._id} />)
          ) : (
            <p>No hay riesgos disponibles.</p>
          )}
        </>
      ) : (
        <CircularProgress />
      )}
    </CustomGrid>
  );
}
