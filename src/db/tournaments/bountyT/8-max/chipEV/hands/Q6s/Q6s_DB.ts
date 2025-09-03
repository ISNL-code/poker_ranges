// Q6s.ts
import { Q6s_calls } from "./actions/Q6s_calls_DB";
import { Q6s_folds } from "./actions/Q6s_folds_DB";
import { Q6s_raises } from "./actions/Q6s_raises_DB";

export const Q6s = {
  code: "Q6s",
  raises: Q6s_raises,
  folds: Q6s_folds,
  calls: Q6s_calls,
};
