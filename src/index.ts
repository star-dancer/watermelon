import { Linter } from "eslint";

import { JS_CONFIG, TS_CONFIG } from "./config";

export const eslintConfig: Linter.Config = {
  root: true,
  overrides: [JS_CONFIG, TS_CONFIG]
};
