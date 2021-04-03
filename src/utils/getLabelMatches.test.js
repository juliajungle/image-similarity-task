import { getLabelMatches } from "./getLabelMatches";

const testArray = [
  { description: "Flower", score: 0.9955990314483643 },
  { description: "Flowering plant", score: 0.9854584336280823 },
];

const testDescription = "Flower";

test("array is sorted in descending order", () => {
  const expectedArray = [{ description: "Flower", score: 0.9955990314483643 }];
  expect(getLabelMatches(testArray, testDescription)).toEqual(expectedArray);
});
