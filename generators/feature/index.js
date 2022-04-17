// eslint-disable-next-line no-undef
module.exports = {
  description: "Feature Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "feature name",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/features/{{name}}/api",
    },
    {
      type: "add",
      path: "src/features/{{name}}/routes",
    },
    {
      type: "add",
      path: "src/features/{{name}}/types",
    },
    {
      type: "add",
      path: "src/features/{{name}}/components",
    },
    {
      type: "add",
      path: "src/features/{{name}}/{{properCase name}}.tsx",
      templateFile: "generators/feature/index.ts.hbs",
    },
  ],
};
