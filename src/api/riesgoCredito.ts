import { url } from "../utils/global";

export const registerRisk = (
    id?:string,
    pd?: string,
    lgd?: string,
    ead?: string,
    probabilidad?: string,
    impacto?: string
) => {
  const jsonRegister = {
    method: "POST",
    body: JSON.stringify({ pd, lgd, ead, probabilidad, impacto }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${url}/riesgoCredito/${id}`, jsonRegister);
};
