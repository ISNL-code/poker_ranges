// Q9o.ts
import { Q9o_calls } from "./actions/Q9o_calls_DB";
import { Q9o_folds } from "./actions/Q9o_folds_DB";
import { Q9o_raises } from "./actions/Q9o_raises_DB";

export const Q9o = {
  code: "Q9o",
  raises: Q9o_raises,
  folds: Q9o_folds,
  calls: Q9o_calls,
};
