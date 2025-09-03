// Q9s.ts
import { Q9s_calls } from "./actions/Q9s_calls_DB";
import { Q9s_folds } from "./actions/Q9s_folds_DB";
import { Q9s_raises } from "./actions/Q9s_raises_DB";

export const Q9s = {
  code: "Q9s",
  raises: Q9s_raises,
  folds: Q9s_folds,
  calls: Q9s_calls,
};
