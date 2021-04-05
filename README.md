# Image similarity task

I have used the images and data provided to return a set of similar images.

The algorithm uses the `description` and `score` property on each of the labels. The search will check for any matching descriptions and then create a rank on each imaged based on the number of labels and their score.
Then the data is sorted to return them in order of relevance.

## How it works

Click on an image to start the algorithm.

1. The labels of the chosen image are stored for comparison.
2. The image data is updated so the chosen image is removed. So now it should just contain data for 19 images.
3. For each image, any matching label descriptions are returned and then each of those labels' scores are added up to give each image a `rank`.
4. The data is then sorted in descending order so that the highest ranked images are at the top.

## The app setup

I use CRA to set this app up. I stuck with their main structure and added these folders:

- components
- images
- utils

To run `npm run start`
I have added some tests for the utils - `npm run test`

I have added some basic styling and used `styled-components`.

### Limitations / improvements

- The algorithm searches on all the labels of the chosen image which might not return the best result. It could be better to just use its top scored labels. This would also help speed up the search and to return the other images that only have those descriptions.

- The ranking is basic as it just adding up the scores. It could be more accurate to use the score of the chosen image in this equation, perhaps multiplying it against the matching ones so they have a similar weighting.

- It doesn't consider that some descriptions have multiple words so it could be useful to search based on just part of the description.

- The search could limit the data it searches, maybe stopping if the required number of similar images are found.
