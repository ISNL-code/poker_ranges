// K7o.ts
import { K7o_calls } from "./actions/K7o_calls_DB";
import { K7o_folds } from "./actions/K7o_folds_DB";
import { K7o_raises } from "./actions/K7o_raises_DB";

export const K7o = {
  code: "K7o",
  raises: K7o_raises,
  folds: K7o_folds,
  calls: K7o_calls,
};
