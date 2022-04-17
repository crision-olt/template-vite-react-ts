// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const componentGenerator = require("./generators/component/index");

// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const featureGenerator = require("./generators/feature/index");

// eslint-disable-next-line no-undef
module.exports = function (plop) {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("feature", featureGenerator);
};
