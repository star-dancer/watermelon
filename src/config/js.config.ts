import { Linter } from "eslint";

export const JS_CONFIG:Linter.ConfigOverride={
    files:["*.js"],
    extends:["eslint:recommended","plugin:prettier/recommended"],
    plugins:["prettier"],
    parserOptions:{
        ecmaVersion:2021
    },
    rules:{
        "indent":["error",2],
        "linebreak-style":["error","unix"],
        "quotes":["error","double"],
        "semi":["error","always"]
    }
}