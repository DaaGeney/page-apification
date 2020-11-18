import { url } from "../utils/global";
import { getToken } from "../utils/helpers";

export const registerRisk = (
    name?:string,
    PD?: number,
    EAD?: number,
    LGD?: number,
    probabilidad?: number,
    impacto?: number,
    id?: string

) => {  
  const jsonRegister = {
    method: "POST",
    body: JSON.stringify({name, PD, EAD, LGD, probabilidad, impacto }),
    headers: {
      "Content-Type": "application/json",
      authorization: getToken().token,
    },
  };
  return fetch(`${url}/riesgoCredito/${id}`, jsonRegister);
};

export const getMap = (
  id?:string
) => {
const jsonRegister = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: getToken().token,
  },
};
return fetch(`${url}/riesgoCredito/${id}/mapa`, jsonRegister);
};

export const getAllRisks = () => {
  const jsonGetAllRisks = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: getToken().token,
    },
  };
  return fetch(`${url}/riesgosCredito`, jsonGetAllRisks);
};

export const getReport = (
  id?:string
) => {
const jsonRegister = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: getToken().token,
  },
};
return fetch(`${url}/perdidaEsperada/${id}/reporte`, jsonRegister);
};
