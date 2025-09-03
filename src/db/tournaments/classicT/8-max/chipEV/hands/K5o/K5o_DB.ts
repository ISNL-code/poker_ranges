// K5o.ts
import { K5o_calls } from "./actions/K5o_calls_DB";
import { K5o_folds } from "./actions/K5o_folds_DB";
import { K5o_raises } from "./actions/K5o_raises_DB";

export const K5o = {
  code: "K5o",
  raises: K5o_raises,
  folds: K5o_folds,
  calls: K5o_calls,
};
