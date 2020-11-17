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
import { registerRisk } from "../../../api/riesgoCredito";

type Inputs = {
  impacto?: string;
  probabilidad?: string;
  EAD?: string;
  PD?: string;
  LGD?: string;
  id?: string;
};

export default function FormDialog(props: any) {
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();

  const onSave = (data: Inputs) => {
    registerRisk(
      data.id,
      data.PD,
      data.LGD,
      data.EAD,
      data.probabilidad,
      data.impacto
    )
      .then((res) => res.json())
      .then((result) =>  {
        if (result.status) {
          props.typeSnack("success")
          props.messageAlert(result.message)
          props.activeAlert()
          reset();
        } else {
          props.typeSnack("error")
          props.messageAlert(result.message)
          props.activeAlert()
        }
      });
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
              label="Nombre"
              margin="normal"
              name="id"
              helperText={errors.id ? "This field is required" : ""}
              inputRef={register({ required: true })}
              error={Boolean(errors.id)}
              type="text"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Probabilidad de incumplimiento"
              margin="normal"
              name="PD"
              helperText={errors.PD ? "This field is required" : ""}
              inputRef={register({ required: true })}
              error={Boolean(errors.PD)}
              type="number"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Ratio de pérdida"
              margin="normal"
              name="LGD"
              helperText={errors.LGD ? "This field is required" : ""}
              inputRef={register({ required: true })}
              error={Boolean(errors.LGD)}
              type="number"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Tamaño deuda"
              margin="normal"
              name="EAD"
              helperText={errors.EAD ? "This field is required" : ""}
              inputRef={register({ required: true })}
              error={Boolean(errors.EAD)}
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
