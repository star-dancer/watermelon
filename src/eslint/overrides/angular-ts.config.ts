import { Linter } from "eslint";

import { TS_CONFIG } from "./ts.config";

export const ANGULAR_TS_CONFIG: Linter.ConfigOverride = {
  files: ["*.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  extends: [
    ...(TS_CONFIG.extends as string[]).filter(
      (item) => item !== "plugin:prettier/recommended"
    ),
    "plugin:@angular-eslint/recommend",
    "plugin:@angular-eslint/template/process-inline-templates",
    "plugin:prettier/recommended"
  ],
  plugins: [...(TS_CONFIG.plugins as string[]), "@angular-eslint"],
  rules: { ...TS_CONFIG.rules }
};
