import Alert from "../../Alert";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { CustomForm } from "./styles";
import { calculateExpectedLost } from "../../../api/expectedLost";
import { useForm } from "react-hook-form";

type Inputs = {
  impact?: number;
  probability?: number;
  expectedLost?: number;
};

const FormDialog = (props: any) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [typeMessage, setTypeMessage] = useState("");
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();

  const onSave = (data: Inputs) => {
    const body = {
      pd: data.impact,
      lgd: data.probability,
      ead: data.expectedLost,
    };
    calculateExpectedLost(body, props.body.id)
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          props.onChangeExpected(props.body.id, result.data.valor);
          onHandleOpenAlert(result.message, "success");
          reset();
        } else {
          onHandleOpenAlert(result.message, "error");
        }
      });
  };

  const onHandleOpenAlert = (message: string, type: string) => {
    setOpenAlert(true);
    setMessageAlert(message);
    setTypeMessage(type);
  };

  const onHandleClose = () => {
    setOpenAlert(false);
    setMessageAlert("");
    setTypeMessage("");
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
    >
      <CustomForm onSubmit={handleSubmit(onSave)}>
        <DialogTitle id="form-dialog-title">PERDIDAD ESPERADA</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor llene todos los campos que se le presentaran a
            continuación.
          </DialogContentText>
          <TextField
            fullWidth
            label="Probabilidad de incumplimiento"
            margin="normal"
            name="impact"
            helperText={errors.impact ? "This field is required" : ""}
            inputRef={register({ required: true })}
            error={Boolean(errors.impact)}
            type="number"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Ratio de pérdida"
            margin="normal"
            name="probability"
            helperText={errors.probability ? "This field is required" : ""}
            inputRef={register({ required: true })}
            error={Boolean(errors.probability)}
            type="number"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Tamaño de deuda"
            margin="normal"
            name="expectedLost"
            helperText={errors.expectedLost ? "This field is required" : ""}
            inputRef={register({ required: true })}
            error={Boolean(errors.expectedLost)}
            type="number"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancelar
          </Button>
          <Button type="submit" color="primary">
            CALCULAR
          </Button>
        </DialogActions>
      </CustomForm>
      <Alert open={openAlert} handleClose={onHandleClose} type={typeMessage}>
        {messageAlert}
      </Alert>
    </Dialog>
  );
};

export default FormDialog;
