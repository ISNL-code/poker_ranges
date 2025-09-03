// K4o.ts
import { K4o_calls } from "./actions/K4o_calls_DB";
import { K4o_folds } from "./actions/K4o_folds_DB";
import { K4o_raises } from "./actions/K4o_raises_DB";

export const K4o = {
  code: "K4o",
  raises: K4o_raises,
  folds: K4o_folds,
  calls: K4o_calls,
};
