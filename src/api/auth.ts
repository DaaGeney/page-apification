import { url } from "../utils/global";

export const registerCompany = (
  email?: string,
  password?: string,
  name?: string
) => {
  const jsonRegister = {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${url}/register`, jsonRegister);
};

export const logInCompany = (email?: string, password?: string) => {
  const jsonLogIn = {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${url}/login`, jsonLogIn);
};
