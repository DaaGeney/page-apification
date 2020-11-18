import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import RegisterItem from "./ResgiterItem";
import { RegisterContainer } from "./styles";
import { getAllRegister } from "../../api/register";
import { getToken, checkUserExistance } from "../../utils/helpers";

const Register = (props: any) => {
  const [listRegister, setListRegister] = useState<Array<any>>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAllRegister(getToken().user.email)
      .then((res) => res.json())
      .then((result) => {
        checkUserExistance(result.message, props);
        if (result.status) {
          setListRegister(result.data);
        }
        setLoaded(true);
      });
  }, []);

  return (
    <RegisterContainer>
      {loaded ? (
        listRegister.length > 0 ? (
          listRegister.map((e) => (
            <RegisterItem key={`${e._id}-${e.id}`} body={e} />
          ))
        ) : (
          <h2>No hay nada que mostrar :(</h2>
        )
      ) : (
        <CircularProgress />
      )}
    </RegisterContainer>
  );
};

export default Register;
