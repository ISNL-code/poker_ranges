// Q8s.ts
import { Q8s_calls } from "./actions/Q8s_calls_DB";
import { Q8s_folds } from "./actions/Q8s_folds_DB";
import { Q8s_raises } from "./actions/Q8s_raises_DB";

export const Q8s = {
  code: "Q8s",
  raises: Q8s_raises,
  folds: Q8s_folds,
  calls: Q8s_calls,
};
