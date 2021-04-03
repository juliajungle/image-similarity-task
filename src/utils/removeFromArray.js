export const removeFromArray = (array, nameOfItemToRemove) =>
  array.filter(({ name }) => name !== nameOfItemToRemove);
