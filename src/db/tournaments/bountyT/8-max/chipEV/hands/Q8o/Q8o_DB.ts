// Q8o.ts
import { Q8o_calls } from "./actions/Q8o_calls_DB";
import { Q8o_folds } from "./actions/Q8o_folds_DB";
import { Q8o_raises } from "./actions/Q8o_raises_DB";

export const Q8o = {
  code: "Q8o",
  raises: Q8o_raises,
  folds: Q8o_folds,
  calls: Q8o_calls,
};
