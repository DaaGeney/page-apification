export const getToken = () => {
  const session = localStorage.getItem("userInfoSoftware");
  if (session) {
    return JSON.parse(session);
  }
  return null;
};

export const checkUserExistance = (message: string, props: any) => {
  if (message === "Token inválido") {
    localStorage.removeItem("userInfoSoftware");
    props.history.push("/login");
    window.location.reload();
  }
};
