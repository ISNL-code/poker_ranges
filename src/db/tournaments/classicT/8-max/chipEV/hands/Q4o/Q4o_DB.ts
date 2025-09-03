// Q4o.ts
import { Q4o_calls } from "./actions/Q4o_calls_DB";
import { Q4o_folds } from "./actions/Q4o_folds_DB";
import { Q4o_raises } from "./actions/Q4o_raises_DB";

export const Q4o = {
  code: "Q4o",
  raises: Q4o_raises,
  folds: Q4o_folds,
  calls: Q4o_calls,
};
