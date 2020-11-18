import React, { useEffect, useState } from "react";
import ExpectedLostItem from "./Risk";
import Dialog from "./Form";
import { getAllExpectedLost } from "../../api/expectedLost";
import { RiskContainer } from "./style";

const ExpectedLost = () => {
  const [listExpected, setListExpected] = useState<Array<any>>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentElement, setCurrentElement] = useState({});

  useEffect(() => {
    getAllExpectedLost()
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          setListExpected(result.data);
        }
      });
  }, []);

  const onOpenDialog = () => setOpenDialog(true);

  const onCloseDialog = () => setOpenDialog(false);

  const onEditElement = (el: any) => {
    setCurrentElement(el);
    onOpenDialog();
  };

  const onChangeExpected = (id: string, value: number) => {
    let element = listExpected.find((e) => e.id === id);
    element.perdidaEsperada = value;
    let body = listExpected.filter((e) => e.id !== id);
    body.push(element);
    setListExpected(body);
  };

  return (
    <RiskContainer>
      {listExpected.length > 0 ? (
        listExpected.map((e) => (
          <ExpectedLostItem
            key={e.id}
            body={e}
            onChangeValue={() => onEditElement(e)}
          />
        ))
      ) : (
        <h2>No hay registro que mostrar :(</h2>
      )}
      {Boolean(Object.keys(currentElement).length) && (
        <Dialog
          onChangeExpected={onChangeExpected}
          body={currentElement}
          open={openDialog}
          onClose={onCloseDialog}
        />
      )}
    </RiskContainer>
  );
};

export default ExpectedLost;
