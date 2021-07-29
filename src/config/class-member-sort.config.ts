// class member排序配置
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SORT_CLASS_MEMBER_CONFIG: any = [
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
