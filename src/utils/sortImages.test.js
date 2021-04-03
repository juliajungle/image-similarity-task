import { sortImages } from "./sortImages";

const testArray = [
  { name: "name1", rank: 1 },
  { name: "name2", rank: 0.5 },
  { name: "name3", rank: 10 },
];

test("array is sorted in descending order", () => {
  const expectedArray = [
    { name: "name3", rank: 10 },
    { name: "name1", rank: 1 },
    { name: "name2", rank: 0.5 },
  ];
  expect(sortImages(testArray)).toEqual(expectedArray);
});
