export const normaliseData = (images) => {
  const normalisedImageData = Object.entries(images).map(([key, labels]) => {
    return {
      name: key,
      labels: labels.map((label) => {
        return {
          description: label.description,
          score: label.score,
        };
      }),
    };
  });

  return normalisedImageData;
};
