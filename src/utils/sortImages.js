export const sortImages = (imageArray) =>
  imageArray.sort((a, b) => parseFloat(b.rank) - parseFloat(a.rank));
