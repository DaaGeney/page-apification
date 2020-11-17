import { url } from "../utils/global";

export const getAllExpectedLost = () => {
  const jsonGetAllExpectedLost = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
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
    },
  };
  return fetch(`${url}/perdidaEsperada/${id}`, jsonGetAllExpectedLost);
};
