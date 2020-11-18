import React, { useRef } from "react";
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
import { getToken } from "../../../utils/helpers";

type Inputs = {
  impacto: string;
  probabilidad: string;
  EAD: string;
  PD: string;
  LGD: string;
  name: string;
};

export default function FormDialog(props: any) {
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();

  const onSave = (data: Inputs) => {
    registerRisk(
      data.name,
      parseInt(data.PD),
      parseInt(data.LGD),
      parseInt(data.EAD),
      parseInt(data.probabilidad),
      parseInt(data.impacto),
      getToken().user.email
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          props.typeSnack("success");
          props.messageAlert(result.message);
          props.activeAlert();
          props.addRisk({
            name: data.name,
            PD: parseInt(data.PD),
            LGD: parseInt(data.LGD),
            EAD: parseInt(data.EAD),
            probabilidad: parseInt(data.probabilidad),
            impacto: parseInt(data.impacto),
            id: getToken().user.email,
          });
          reset();
          props.onClose()
        } else {
          props.typeSnack("error");
          props.messageAlert(result.message);
          props.activeAlert();
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
              name="name"
              helperText={errors.name ? "This field is required" : ""}
              inputRef={register({ required: true })}
              error={Boolean(errors.name)}
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
              helperText={
                errors.probabilidad
                  ? errors.probabilidad.message
                    ? errors.probabilidad.message
                    : "This field is required"
                  : ""
              }
              error={Boolean(errors.probabilidad)}
              type="number"
              variant="outlined"
              inputRef={register({
                required: true,
                pattern: {
                  value: /^[3,5,9]$/i,
                  message: "Debes ingresar 3, 5 ó 9",
                },
              })}
            />
            <TextField
              fullWidth
              label="Impacto"
              margin="normal"
              name="impacto"
              helperText={
                errors.impacto
                  ? errors.impacto.message
                    ? errors.impacto.message
                    : "This field is required"
                  : ""
              }
              inputRef={register({
                required: true,
                pattern: {
                  value: /^[4,6,8]$/i,
                  message: "Debes ingresar 4, 6 ó 8",
                },
              })}
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
