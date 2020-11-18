import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "./Form";
import ExpectedLostItem from "./Risk";
import React, { useEffect, useState } from "react";
import { RiskContainer } from "./style";
import { getAllExpectedLost } from "../../api/expectedLost";
import { checkUserExistance } from "../../utils/helpers";

const ExpectedLost = (props: any) => {
  const [listExpected, setListExpected] = useState<Array<any>>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentElement, setCurrentElement] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAllExpectedLost()
      .then((res) => res.json())
      .then((result) => {
        checkUserExistance(result.message, props);
        if (result.status) {
          setListExpected(result.data);
        }
        setLoaded(true);
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
      {loaded ? (
        <>
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
        </>
      ) : (
        <CircularProgress />
      )}
    </RiskContainer>
  );
};

export default ExpectedLost;
