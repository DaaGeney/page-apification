export const getToken = () => {
  const session = localStorage.getItem("userInfoSotware");
  if (session) {
    return JSON.parse(session);
  }
  return null;
};
