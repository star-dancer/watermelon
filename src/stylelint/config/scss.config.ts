import { Configuration } from "stylelint";

export const STYLELINT_SCSS_CONFIG: Configuration = {
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
      }
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null
  },
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-standard",
    "stylelint-config-property-sort-order-smacss"
  ],
  plugins: [],
  processors: [],
  ignoreFiles: [],
  defaultSeverity: "error"
};
