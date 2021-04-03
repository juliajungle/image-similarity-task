# Image similarity task

I have used the images and data provided to return a set of similar images.

The algorithm uses the `description` and `score` property on each of the labels. The search will check for any matching descriptions and then create a rank on each imaged based on the number of labels and their score.
Then the data is sorted to return them in order of relevance.

## The app setup

I use CRA to set this app up. I stuck with their main structure and added these folders:

- components
- images
- utils

To run `npm run start`
I have added some tests for the utils - `npm run test`

I have added some basic styling and used `styled-components`.

### Limitations

The algorithm searches on all the labels of the image which might not return the best result.
It could be better to just use its top scored labels. This would also help speed up the search and to return the other images that only have those descriptions.

It doesn't consider that some descriptions have multiple words so it could be useful to search based on just part of the description.

The search could limit the data it searches, maybe stopping if the required number of similar images are found.
