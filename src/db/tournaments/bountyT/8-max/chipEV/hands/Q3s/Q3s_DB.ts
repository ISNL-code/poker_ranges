// Q3s.ts
import { Q3s_calls } from "./actions/Q3s_calls_DB";
import { Q3s_folds } from "./actions/Q3s_folds_DB";
import { Q3s_raises } from "./actions/Q3s_raises_DB";

export const Q3s = {
  code: "Q3s",
  raises: Q3s_raises,
  folds: Q3s_folds,
  calls: Q3s_calls,
};
