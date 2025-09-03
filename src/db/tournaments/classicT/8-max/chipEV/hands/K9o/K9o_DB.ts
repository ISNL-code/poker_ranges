// K9o.ts
import { K9o_calls } from "./actions/K9o_calls_DB";
import { K9o_folds } from "./actions/K9o_folds_DB";
import { K9o_raises } from "./actions/K9o_raises_DB";

export const K9o = {
  code: "K9o",
  raises: K9o_raises,
  folds: K9o_folds,
  calls: K9o_calls,
};
