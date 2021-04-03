import { sortImages } from "./sortImages";
import { removeFromArray } from "./removeFromArray";
import { getLabelMatches } from "./getLabelMatches";

export const search = (imageId, imageData) => {
  const goalImageData = imageData.find((image) => image.name === imageId);

  // remove current image from data
  const otherImages = removeFromArray(imageData, imageId);

  // look for matching label descriptions, get the score for each and create a rank on the image
  const similarImages = otherImages.map(({ name, labels }) => {
    const rank = labels
      .filter(
        ({ description }) =>
          getLabelMatches(goalImageData.labels, description).length > 0
      )

      .reduce((acc, cur) => {
        return acc + cur.score;
      }, 0);

    return { name, rank };
  });

  // sort data to most relevant first
  return sortImages(similarImages);
};
