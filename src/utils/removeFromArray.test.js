import { removeFromArray } from "./removeFromArray";

const testArray = [
  { name: "removeMe", labels: {} },
  { name: "keep1", labels: {} },
  { name: "keep2", labels: {} },
];

test("object is removed from the array by name", () => {
  const nameOfObjectToRemove = "removeMe";
  const expectedArray = [
    { name: "keep1", labels: {} },
    { name: "keep2", labels: {} },
  ];
  expect(removeFromArray(testArray, nameOfObjectToRemove)).toEqual(
    expectedArray
  );
});

test("object is not removed from the array when the name does not match any object", () => {
  const nameOfObjectToRemove = "no such name";

  expect(removeFromArray(testArray, nameOfObjectToRemove)).toEqual(testArray);
});
