// K7s.ts
import { K7s_calls } from "./actions/K7s_calls_DB";
import { K7s_folds } from "./actions/K7s_folds_DB";
import { K7s_raises } from "./actions/K7s_raises_DB";

export const K7s = {
  code: "K7s",
  raises: K7s_raises,
  folds: K7s_folds,
  calls: K7s_calls,
};
