export const passwordMatcher = (pas1: string, pas2: string): boolean => {
  const passwordFormat =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%_*?&])[A-Za-z\\d@$!%_*?&]{8,}$";

  if (!pas1.trim().match(passwordFormat) || !pas2.trim().match(passwordFormat))
    return false;
  return pas1 === pas2;
};
