// Q4s.ts
import { Q4s_calls } from "./actions/Q4s_calls_DB";
import { Q4s_folds } from "./actions/Q4s_folds_DB";
import { Q4s_raises } from "./actions/Q4s_raises_DB";

export const Q4s = {
  code: "Q4s",
  raises: Q4s_raises,
  folds: Q4s_folds,
  calls: Q4s_calls,
};
