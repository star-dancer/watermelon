import { Linter } from "eslint";
import { SORT_CLASS_MEMBER_CONFIG } from "./class-member-sort.config";

export const TS_CONFIG:Linter.ConfigOverride={
    files:["*.ts"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module"
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:unicorn/recommended",
      "plugin:eslint-comments/recommended",
      "plugin:prettier/recommended",
      "plugin:jsdoc/recommended"
    ],
    plugins: [
      "prettier",
      "unicorn",
      "eslint-comments",
      "sort-class-members",
      "simple-import-sort",
      "jsdoc",
      "eslint-plugin-tsdoc",
      "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/no-explicit-any": [2, { fixToUnknown: true }],
        "jsdoc/require-jsdoc": ["warn", { enableFixer: false, publicOnly: false }],
        "sort-class-members/sort-class-members": SORT_CLASS_MEMBER_CONFIG,
        "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        quotes: ["warn", "double"],
        semi: ["error", "always"],
        //使用驼峰式方法
        camelcase: "off",
        "no-useless-escape": "off",
        "sort-imports": "off",
        // 简易Import排序
        "simple-import-sort/imports": "error",
        // 简易Export排序
        "simple-import-sort/exports": "error",
        // 防止缩写
        "unicorn/prevent-abbreviations": "off",
        // 禁止显式类型声明
        "@typescript-eslint/no-inferrable-types": [
          0,
          {
            ignoreParameters: false,
            ignoreProperties: false
          }
        ],
        // 强制文件名的大小写样式
        "unicorn/filename-case": "off",
        // 禁止使用forEach
        "unicorn/no-array-for-each": "off",
        // 禁止使用Array.reduce
        "unicorn/no-array-reduce": "off",
        // 禁止使用null
        "unicorn/no-null": "off",
        "unicorn/prefer-module": "off",
        "unicorn/prefer-node-protocol": "off",
        "unicorn/import-style": "off"
      }
}