export const filterNumbers = (array, largerThan) => {
  const newNumbers = [];
  array.forEach((number) => {
    if (largerThan >= number) {
      newNumbers.push(number);
    }
  });
  return newNumbers;
};
