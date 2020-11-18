import React, { useEffect, useState } from "react";
import Dialog from "./Form";
import CustomCard from "./Risk";
import Alert from "../Alert";
import { RiskContainer, CustomButton } from "./styles";
import { getAllRisks, deleteRisk } from "../../api/risks";

const Risks = () => {
  const [messageAlert, setMessageAlert] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [edit, setEdit] = useState(false);
  const [elementEdit, setElementEdit] = useState({});
  const [risks, setRisks] = useState<Array<any>>([]);
  const [typeMessage, setTypeMessage] = useState("");

  useEffect(() => {
    getAllRisks()
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          setRisks(result.data);
        }
      });
  }, []);

  const onOpenDialog = () => setOpenDialog(true);

  const onCloseDialog = () => {
    setOpenDialog(false);
    setEdit(false);
    setElementEdit({});
    setEdit(false);
  };

  const onAddRisk = (newElement: object) => {
    let elements = [...risks];
    elements.push(newElement);
    setRisks(elements);
  };

  const onEditRisk = (newElement: any) => {
    let elements = risks.filter(({ _id }) => _id !== newElement._id);
    elements.push(newElement);
    setRisks(elements);
  };

  const onEditElement = (element: any) => {
    setElementEdit(element);
    onOpenDialog();
    setEdit(true);
  };

  const onDeleteElement = (id: string) => {
    deleteRisk(id)
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          setRisks(risks.filter(({ _id }) => _id !== id));
          onHandleOpenAlert(result.message, "success");
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

  const onHandleCloseAlert = () => {
    setOpenAlert(false);
    setMessageAlert("");
    setTypeMessage("");
  };

  return (
    <RiskContainer>
      <CustomButton onClick={onOpenDialog}>Agregar nuevo riesgo</CustomButton>
      {risks.length > 0 ? (
        risks.map((e) => (
          <CustomCard
            body={e}
            key={e._id}
            onDeleteElement={() => onDeleteElement(e._id)}
            onEditElement={() => onEditElement(e)}
          />
        ))
      ) : (
        <h2>No hay riesgos disponibles.</h2>
      )}
      <Dialog
        edit={edit}
        elementEdit={elementEdit}
        onAdd={onAddRisk}
        onClose={onCloseDialog}
        onEdit={onEditRisk}
        open={openDialog}
      />
      <Alert
        open={openAlert}
        handleClose={onHandleCloseAlert}
        type={typeMessage}
      >
        {messageAlert}
      </Alert>
    </RiskContainer>
  );
};

export default Risks;
