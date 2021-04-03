export const getLabelMatches = (labels, testDescription) =>
  labels.filter((label) => testDescription === label.description);
