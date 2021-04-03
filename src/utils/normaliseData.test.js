import { normaliseData } from "./normaliseData";

const ogData = {
  name1: [
    {
      locations: [],
      properties: [],
      mid: "/m/0c9ph5",
      locale: "",
      description: "Flower",
      score: 0.9955990314483643,
      confidence: 0,
      topicality: 0.9955990314483643,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/04sjm",
      locale: "",
      description: "Flowering plant",
      score: 0.9854584336280823,
      confidence: 0,
      topicality: 0.9854584336280823,
      boundingPoly: null,
    },
  ],
  name2: [
    {
      locations: [],
      properties: [],
      mid: "/m/0c9ph5",
      locale: "",
      description: "Flower",
      score: 0.9955990314483643,
      confidence: 0,
      topicality: 0.9955990314483643,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/04cnqy",
      locale: "",
      description: "Sea lettuce",
      score: 0.703261137008667,
      confidence: 0,
      topicality: 0.703261137008667,
      boundingPoly: null,
    },
  ],
};

test("data is normalised correctly", () => {
  const expectedArray = [
    {
      name: "name1",
      labels: [
        { description: "Flower", score: 0.9955990314483643 },
        { description: "Flowering plant", score: 0.9854584336280823 },
      ],
    },
    {
      name: "name2",
      labels: [
        { description: "Flower", score: 0.9955990314483643 },
        { description: "Sea lettuce", score: 0.703261137008667 },
      ],
    },
  ];
  expect(normaliseData(ogData)).toEqual(expectedArray);
});
