import { url } from "../utils/global";
import { getToken } from "../utils/helpers";

export const getAllRegister = (id: string) => {
  const jsonGetAllRegister = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: getToken().token,
    },
  };
  return fetch(`${url}/riesgoCredito/${id}/registros`, jsonGetAllRegister);
};
