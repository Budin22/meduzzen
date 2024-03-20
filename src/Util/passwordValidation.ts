export const passwordValidation = (password: string): boolean => {
  const passwordFormat =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%_*?&])[A-Za-z\\d@$!%_*?&]{8,}$";
  return !!password.trim().match(passwordFormat);
};
