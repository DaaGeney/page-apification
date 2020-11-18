import React, { useEffect, useState } from "react";
import RegisterItem from "./ResgiterItem";
import { RegisterContainer } from "./styles";
import { getAllRegister } from "../../api/register";
import { getToken } from "../../utils/helpers";

const Register = () => {
  const [listRegister, setListRegister] = useState<Array<any>>([]);

  useEffect(() => {
    getAllRegister(getToken().user.email)
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          setListRegister(result.data);
        }
      });
  }, []);

  return (
    <RegisterContainer>
      {listRegister.length > 0 ? (
        listRegister.map((e) => (
          <RegisterItem key={`${e._id}-${e.id}`} body={e} />
        ))
      ) : (
        <h2>No hay nada que mostrar :(</h2>
      )}
    </RegisterContainer>
  );
};

export default Register;
