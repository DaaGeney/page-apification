import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

type RiskDescriptionProps = {
  body: {
    _id: string;
    id: string;
    EAD: number;
    LGD: number;
    PD: number;
    impacto: number;
    name: string;
    otros: string;
    probabilidad: string;
    registro: string;
  };
  onClose: any;
  open: boolean;
};

const RiskDescription = ({ body, open, onClose }: RiskDescriptionProps) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id={`form-dialog-title-${body._id}`}>
        {body.name}
      </DialogTitle>
      <DialogContent>
        {Object.entries(body).map(
          ([key, value]) =>
            !key.includes("id") &&
            key !== "name" && (
              <DialogContentText key={`${key}-${value}`}>
                {key.toUpperCase()}: {value ? value : "Sin información"}
              </DialogContentText>
            )
        )}
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Salir
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default RiskDescription;
