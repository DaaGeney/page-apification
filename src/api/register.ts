import { url } from "../utils/global";

export const getAllRegister = (id: string) => {
  const jsonGetAllRegister = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${url}/riesgoCredito/${id}/registros`, jsonGetAllRegister);
};
