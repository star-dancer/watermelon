import { Configuration } from "stylelint";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sortOrderSmacss = require("stylelint-config-property-sort-order-smacss/generate");
export const STYLELINT_SCSS_CONFIG: Configuration = {
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
      }
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "order/properties-order": [sortOrderSmacss({ order: "flexible" })]
  },
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-property-sort-order-smacss"
  ],
  plugins: [],
  processors: [],
  ignoreFiles: [],
  defaultSeverity: "error"
};
