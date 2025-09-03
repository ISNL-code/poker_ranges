// K5s.ts
import { K5s_calls } from "./actions/K5s_calls_DB";
import { K5s_folds } from "./actions/K5s_folds_DB";
import { K5s_raises } from "./actions/K5s_raises_DB";

export const K5s = {
  code: "K5s",
  raises: K5s_raises,
  folds: K5s_folds,
  calls: K5s_calls,
};
