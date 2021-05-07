const validateCharLimit = (input: string, numChars: number): boolean => {
  if (input.length > numChars) {
    return false;
  }
  return true;
};

export default validateCharLimit;
