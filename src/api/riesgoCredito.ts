import { url } from "../utils/global";

export const registerRisk = (
    id?:string,
    PD?: string,
    EAD?: string,
    LGD?: string,
    probabilidad?: string,
    impacto?: string
) => {
  const jsonRegister = {
    method: "POST",
    body: JSON.stringify({ PD, EAD, LGD, probabilidad, impacto }),
    headers: {
      "Content-Type": "application/json",
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
  },
};
return fetch(`${url}/riesgoCredito/${id}/mapa`, jsonRegister);
};

export const getAllRisks = () => {
  const jsonGetAllRisks = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
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
  },
};
return fetch(`${url}/perdidaEsperada/${id}/reporte`, jsonRegister);
};
