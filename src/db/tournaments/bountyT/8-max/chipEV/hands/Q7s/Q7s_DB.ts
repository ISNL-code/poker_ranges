// Q7s.ts
import { Q7s_calls } from "./actions/Q7s_calls_DB";
import { Q7s_folds } from "./actions/Q7s_folds_DB";
import { Q7s_raises } from "./actions/Q7s_raises_DB";

export const Q7s = {
  code: "Q7s",
  raises: Q7s_raises,
  folds: Q7s_folds,
  calls: Q7s_calls,
};
