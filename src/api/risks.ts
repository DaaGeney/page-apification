import { url } from "../utils/global";
import { getToken } from "../utils/helpers";

export const createRisk = (body: object) => {
  const jsonCreateRisk = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      authorization: getToken().token,
    },
  };
  return fetch(`${url}/riesgos`, jsonCreateRisk);
};

export const getAllRisks = (id: string) => {
  const jsonGetAllRisks = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: getToken().token,
    },
  };
  return fetch(`${url}/riesgos/${id}`, jsonGetAllRisks);
};

export const deleteRisk = (id: string) => {
  const jsonDeleteRisk = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: getToken().token,
    },
  };
  return fetch(`${url}/riesgos/${id}`, jsonDeleteRisk);
};

export const editRisk = (body: object, id: string) => {
  const jsonEditRisk = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      authorization: getToken().token,
    },
  };
  return fetch(`${url}/riesgos/${id}`, jsonEditRisk);
};
