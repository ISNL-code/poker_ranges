// Q3o.ts
import { Q3o_calls } from "./actions/Q3o_calls_DB";
import { Q3o_folds } from "./actions/Q3o_folds_DB";
import { Q3o_raises } from "./actions/Q3o_raises_DB";

export const Q3o = {
  code: "Q3o",
  raises: Q3o_raises,
  folds: Q3o_folds,
  calls: Q3o_calls,
};
