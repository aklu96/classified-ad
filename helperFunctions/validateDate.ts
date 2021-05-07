const validateDate = (date: Date): boolean => {
  if (date <= new Date()) {
    return false;
  }
  return true;
};

export default validateDate;
