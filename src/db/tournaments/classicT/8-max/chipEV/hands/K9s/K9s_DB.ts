// K9s.ts
import { K9s_calls } from "./actions/K9s_calls_DB";
import { K9s_folds } from "./actions/K9s_folds_DB";
import { K9s_raises } from "./actions/K9s_raises_DB";

export const K9s = {
  code: "K9s",
  raises: K9s_raises,
  folds: K9s_folds,
  calls: K9s_calls,
};
