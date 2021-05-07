const validateCharLimit = (input: string, numChars: number): boolean => {
  console.log(input.length);
  if (input.length > numChars || input.length === 0) {
    return false;
  }
  return true;
};

export default validateCharLimit;
