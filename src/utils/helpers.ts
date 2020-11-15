export const getToken = () => {
  const session = localStorage.getItem("softwareAPI");
  if (session) {
    return JSON.parse(session);
  }
  return null;
};
