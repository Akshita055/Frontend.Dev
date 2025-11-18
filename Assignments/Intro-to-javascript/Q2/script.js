const data = {
  stringData: "akshita",
  numberData: 21,
  booleanData: true,
  arrayData: [1, 2, 3],
  objectData: { a: 1 },
  nullData: null,
  undefinedData: undefined,
};

const summary = Object.entries(data).map(([key, value]) => ({
  label: key,
  value,
  type: Array.isArray(value) ? "array" : typeof value,
}));

console.table(summary);
