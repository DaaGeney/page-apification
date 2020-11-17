import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CustomForm } from "./styles";
import { getReport } from "../../../api/riesgoCredito";

export default function Map(props: any) {
  const [report, setReport] = React.useState("");
  const [perdida, setPerdida] = React.useState("");

  React.useEffect(() => {
    getReport(props.id)
      .then((res) => res.json())
      .then((result) => {
        setReport(result.data.nombre);
        setPerdida(result.data.perdidaEsperada)
      });
  }, []);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <CustomForm>
          <DialogTitle id="form-dialog-title">REPORTE</DialogTitle>
          <DialogContent>
            <DialogContentText>
              El reporte encontrado para la empresa seleccionada es:
            </DialogContentText>
            <TextField
              fullWidth
              label="Compañia"
              margin="normal"
              name="compania"
              value={report}
              type="text"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Perdida Esperada"
              margin="normal"
              name="PE"
              value={perdida}
              type="text"
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </CustomForm>
      </Dialog>
    </div>
  );
}
