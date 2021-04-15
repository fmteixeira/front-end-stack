// stylelint.config.js
const prettierConfig = require("./prettier.config.js");

// The regex must match CSS selectors conforming to the BEM naming conventions
// you want to enforce.
const customBemSelector = () => {
    return new RegExp("^.[a-z0-9-]+((_{2}|-{2})?[a-z0-9-]+)?(-{2}[a-z0-9-]+)?[a-z0-9]$")
};

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-css-modules", "stylelint-config-prettier"],
  plugins: ["stylelint-prettier", "stylelint-selector-bem-pattern"],
  rules: {
    "prettier/prettier": [true, prettierConfig],
    "plugin/selector-bem-pattern": {
      // Derive component names from the file name
      implicitComponents: true,
      // Use the default BEM preset
      preset: "bem",
      // Configures the valid selectors
      componentSelectors: {
        initial: customBemSelector,
      },
      // We allow any custom property (CSS var) names
      ignoreCustomProperties: ".*",
    },
  },
};