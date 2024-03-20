export const emailValidation = (email: string): boolean => {
  const emailFormat = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
  return !!email.trim().match(emailFormat);
};
