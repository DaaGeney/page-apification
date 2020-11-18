import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CustomForm } from "./styles";
import { getMap } from "../../../api/riesgoCredito";

export default function Map(props: any) {
  const [map, setMap] = React.useState("");

  React.useEffect(() => {
    getMap(props.id)
      .then((res) => res.json())
      .then((result) => setMap(result.data));
  }, []);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <CustomForm>
          <DialogTitle id="form-dialog-title">MAPA</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Segun los parametros previamente definidos se obtiene:
            </DialogContentText>
            <TextField
              fullWidth
              label="Mapa"
              margin="normal"
              name="mapa"
              value={map}
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
