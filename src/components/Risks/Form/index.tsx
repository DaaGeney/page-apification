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
import { createRisk, editRisk } from "../../../api/risks";
import { useForm } from "react-hook-form";
import { getToken } from "../../../utils/helpers";

type Inputs = {
  name?: string;
  description?: string;
  subrisk_1?: string;
  subrisk_2?: string;
  subrisk_3?: string;
};

export default function FormDialog(props: any) {
  const [openAlert, setOpenAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [typeMessage, setTypeMessage] = useState("");
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();

  const onSave = (data: Inputs) => {
    const body = {
      company: getToken().user.email,
      name: data.name,
      description: data.description,
      subRiesgos: [
        {
          id: 1,
          name: data.subrisk_1,
        },
        {
          id: 2,
          name: data.subrisk_2,
        },
        {
          id: 3,
          name: data.subrisk_3,
        },
      ],
    };
    if (!props.edit) {
      createRisk(body)
        .then((res) => res.json())
        .then((result) => {
          if (result.status) {
            props.onAdd(result.data);
            onHandleOpenAlert(result.message, "success");
            reset();
          } else {
            onHandleOpenAlert(result.message, "error");
          }
        });
    } else {
      editRisk(body, props.elementEdit._id)
        .then((res) => res.json())
        .then((result) => {
          if (result.status) {
            props.onEdit(result.data);
            onHandleOpenAlert(result.message, "success");
          } else {
            onHandleOpenAlert(result.message, "error");
          }
        });
    }
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
        <DialogTitle id="form-dialog-title">
          {props.edit ? "EDITAR " : "CREAR "}RIESGO
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor llene todos los campos que se le presentaran a
            continuación.
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
            defaultValue={
              Boolean(Object.keys(props.elementEdit).length)
                ? props.elementEdit.name
                : null
            }
          />
          <TextField
            fullWidth
            label="Descripción"
            margin="normal"
            name="description"
            helperText={errors.description ? "This field is required" : ""}
            inputRef={register({ required: true })}
            error={Boolean(errors.description)}
            type="text"
            variant="outlined"
            defaultValue={
              Boolean(Object.keys(props.elementEdit).length)
                ? props.elementEdit.description
                : null
            }
          />
          <TextField
            fullWidth
            label="Sub riesgo 1"
            margin="normal"
            name="subrisk_1"
            helperText={errors.subrisk_1 ? "This field is required" : ""}
            inputRef={register({ required: true })}
            error={Boolean(errors.subrisk_1)}
            type="text"
            variant="outlined"
            defaultValue={
              Boolean(Object.keys(props.elementEdit).length)
                ? props.elementEdit.subRiesgos[0].name
                : null
            }
          />
          <TextField
            fullWidth
            label="Sub riesgo 2"
            margin="normal"
            name="subrisk_2"
            helperText={errors.subrisk_2 ? "This field is required" : ""}
            inputRef={register({ required: true })}
            error={Boolean(errors.subrisk_2)}
            type="text"
            variant="outlined"
            defaultValue={
              Boolean(Object.keys(props.elementEdit).length)
                ? props.elementEdit.subRiesgos[1].name
                : null
            }
          />
          <TextField
            fullWidth
            label="Sub riesgo 3"
            margin="normal"
            name="subrisk_3"
            helperText={errors.subrisk_3 ? "This field is required" : ""}
            inputRef={register({ required: true })}
            error={Boolean(errors.subrisk_3)}
            type="text"
            variant="outlined"
            defaultValue={
              Boolean(Object.keys(props.elementEdit).length)
                ? props.elementEdit.subRiesgos[1].name
                : null
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancelar
          </Button>
          <Button type="submit" color="primary">
            {props.edit ? "EDITAR " : "CREAR "}
          </Button>
        </DialogActions>
      </CustomForm>
      <Alert open={openAlert} handleClose={onHandleClose} type={typeMessage}>
        {messageAlert}
      </Alert>
    </Dialog>
  );
}
