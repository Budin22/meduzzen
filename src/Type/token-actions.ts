export const getTokenFromLS = () => {
  return localStorage.getItem("token") ? localStorage.getItem("token") : "";
};

export const setTokenToLS = (token: string) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
