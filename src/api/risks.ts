import { url } from "../utils/global";

export const createRisk = (body: object) => {
  const jsonCreateRisk = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${url}/riesgos`, jsonCreateRisk);
};

export const getAllRisks = () => {
  const jsonGetAllRisks = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${url}/riesgos`, jsonGetAllRisks);
};

export const deleteRisk = (id: string) => {
  const jsonDeleteRisk = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
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
    },
  };
  return fetch(`${url}/riesgos/${id}`, jsonEditRisk);
};
