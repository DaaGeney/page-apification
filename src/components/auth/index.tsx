import Alert from "../Alert";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { logInCompany, registerCompany } from "../../api/auth";
import { CustomGrid, CustomForm } from "./styles";
import { useForm } from "react-hook-form";

type Inputs = {
  email?: string;
  password?: string;
  emailRegister?: string;
  passwordRegister?: string;
  company?: string;
};

const LogIn = (props: any) => {
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();
  const [logIn, setLogin] = useState(true);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [typeSnack, setTypeSnack] = useState("");

  const onLogin = (data: Inputs) => {
    logInCompany(data.email, data.password)
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          localStorage.setItem(
            "userInfoSotware",
            JSON.stringify({
              user: result.data,
              token: result.token,
            })
          );
          props.history.push(`/`);
        } else {
          setSnackMessage(result.message);
          setTypeSnack("error");
          setOpenSnack(true);
        }
      });
  };

  const onRegister = (data: Inputs) => {
    registerCompany(data.emailRegister, data.passwordRegister, data.company)
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          setTypeSnack("success");
          setSnackMessage("Cuenta creada exitosamente");
          setOpenSnack(true);
          handleSnackStatus();
          reset();
        } else {
          setTypeSnack("error");
          setSnackMessage(result.message);
          setOpenSnack(true);
        }
      });
  };

  const handleSnackStatus = () => setOpenSnack(true);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const handleLoginStatus = (e: any) => {
    e.preventDefault();
    setLogin(!logIn);
  };

  return (
    <CustomGrid height="100vh" width="100vw" container spacing={1}>
      {logIn && (
        <CustomForm width="600px" onSubmit={handleSubmit(onLogin)}>
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            helperText={
              errors.email
                ? errors.email.message
                  ? errors.email.message
                  : "This field is required"
                : ""
            }
            error={Boolean(errors.email)}
            inputRef={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            variant="outlined"
          />
          <TextField
            autoComplete="current-password"
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            helperText={errors.password ? "This field is required" : ""}
            inputRef={register({ required: true })}
            error={Boolean(errors.password)}
            type="password"
            variant="outlined"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
          <CustomGrid item width="auto">
            <Link onClick={handleLoginStatus} variant="body2">
              Don't have an account? Sign Up
            </Link>
          </CustomGrid>
        </CustomForm>
      )}
      {!logIn && (
        <CustomForm width="600px" onSubmit={handleSubmit(onRegister)}>
          <TextField
            fullWidth
            label="Company"
            margin="normal"
            name="company"
            helperText={errors.company ? "This field is required" : ""}
            inputRef={register({ required: true })}
            error={Boolean(errors.company)}
            type="text"
            variant="outlined"
          />
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            label="Email"
            margin="normal"
            name="emailRegister"
            helperText={
              errors.emailRegister
                ? errors.emailRegister.message
                  ? errors.emailRegister.message
                  : "This field is required"
                : ""
            }
            error={Boolean(errors.emailRegister)}
            inputRef={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            variant="outlined"
          />
          <TextField
            autoComplete="current-password"
            fullWidth
            label="Password"
            margin="normal"
            name="passwordRegister"
            helperText={errors.passwordRegister ? "This field is required" : ""}
            inputRef={register({ required: true })}
            error={Boolean(errors.passwordRegister)}
            type="password"
            variant="outlined"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign up
          </Button>
          <CustomGrid item width="auto">
            <Link onClick={handleLoginStatus} variant="body2">
              Do you have an account? Log In
            </Link>
          </CustomGrid>
        </CustomForm>
      )}
      <Alert
        open={openSnack}
        handleClick={handleSnackStatus}
        handleClose={handleClose}
        type={typeSnack}
      >
        {snackMessage}
      </Alert>
    </CustomGrid>
  );
};

export default LogIn;
