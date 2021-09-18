import { Linter } from "eslint";

import {
  ANGULAR_HTML_CONFIG,
  ANGULAR_TS_CONFIG,
  JS_CONFIG,
  TS_CONFIG
} from "./overrides";

export const ESLINT_CONFIG: Linter.Config = {
  root: true,
  overrides: [JS_CONFIG, TS_CONFIG]
};

export const ESLINT_ANGULAR_CONFIG: Linter.Config = {
  root: true,
  overrides: [JS_CONFIG, ANGULAR_HTML_CONFIG, ANGULAR_TS_CONFIG]
};
