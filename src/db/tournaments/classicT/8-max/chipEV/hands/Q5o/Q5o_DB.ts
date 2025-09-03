// Q5o.ts
import { Q5o_calls } from "./actions/Q5o_calls_DB";
import { Q5o_folds } from "./actions/Q5o_folds_DB";
import { Q5o_raises } from "./actions/Q5o_raises_DB";

export const Q5o = {
  code: "Q5o",
  raises: Q5o_raises,
  folds: Q5o_folds,
  calls: Q5o_calls,
};
