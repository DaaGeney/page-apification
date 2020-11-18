import { url } from "../utils/global";
import { getToken } from "../utils/helpers";

export const getAllExpectedLost = () => {
  const jsonGetAllExpectedLost = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: getToken().token,
    },
  };
  return fetch(`${url}/perdidaEsperada`, jsonGetAllExpectedLost);
};

export const calculateExpectedLost = (body: any, id: string) => {
  const jsonGetAllExpectedLost = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      authorization: getToken().token,
    },
  };
  return fetch(`${url}/perdidaEsperada/${id}`, jsonGetAllExpectedLost);
};
