import { Linter } from "eslint";

export const ANGULAR_HTML_CONFIG: Linter.ConfigOverride = {
  files: ["*.html"],
  parser: "@angular-eslint/template-parser",
  plugins: ["@angular-eslint/template"],
  extends: ["plugin:@angular-eslint/template/recommended"],
  rules: {}
};
