// K4s.ts
import { K4s_calls } from "./actions/K4s_calls_DB";
import { K4s_folds } from "./actions/K4s_folds_DB";
import { K4s_raises } from "./actions/K4s_raises_DB";

export const K4s = {
  code: "K4s",
  raises: K4s_raises,
  folds: K4s_folds,
  calls: K4s_calls,
};
