import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CustomForm } from "./styles";
import { useForm } from "react-hook-form";

type Inputs = {
  impacto?: string;
  probabilidad?: string;
  ead?: string;
  lgd?: string;
  pd?: string;
};

export default function FormDialog(props: any) {
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();

  const onSave = (data: Inputs) => {
    console.log(data)
    reset()
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <CustomForm onSubmit={handleSubmit(onSave)}>
          <DialogTitle id="form-dialog-title">CREAR RIESGO</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Por favor llene todos los campos que se le presentaran
              acontinuación.
            </DialogContentText>
            <TextField
              fullWidth
              label="Probabilidad de incumplimiento"
              margin="normal"
              name="pd"
              helperText={errors.pd ? "This field is required" : ""}
              inputRef={register({ required: true })}
              error={Boolean(errors.pd)}
              type="number"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Ratio de pérdida"
              margin="normal"
              name="lgd"
              helperText={errors.lgd ? "This field is required" : ""}
              inputRef={register({ required: true })}
              error={Boolean(errors.lgd)}
              type="number"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Tamaño deuda"
              margin="normal"
              name="ead"
              helperText={errors.ead ? "This field is required" : ""}
              inputRef={register({ required: true })}
              error={Boolean(errors.ead)}
              type="number"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Probabilidad"
              margin="normal"
              name="probabilidad"
              helperText={errors.probabilidad ? "This field is required" : ""}
              inputRef={register({ required: true })}
              error={Boolean(errors.probabilidad)}
              type="number"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Impacto"
              margin="normal"
              name="impacto"
              helperText={errors.impacto ? "This field is required" : ""}
              inputRef={register({ required: true })}
              error={Boolean(errors.impacto)}
              type="number"
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} color="primary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Crear
            </Button>
          </DialogActions>
        </CustomForm>
      </Dialog>
    </div>
  );
}
