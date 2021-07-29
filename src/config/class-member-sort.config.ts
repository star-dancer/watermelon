import { Linter } from "eslint";

// class member排序配置
export const SORT_CLASS_MEMBER_CONFIG:any = [
    2,
    {
      order: [
        "[static-properties]",
        "[static-methods]",
        "[properties]",
        "[getters]",
        "[setters]",
        "[conventional-private-properties]",
        "constructor",
        "[async-methods]",
        "[methods]",
        "[conventional-private-methods]"
      ],
      accessorPairPositioning: "getThenSet"
    }
  ];