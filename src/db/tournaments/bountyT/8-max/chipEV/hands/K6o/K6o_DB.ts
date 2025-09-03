// K6o.ts
import { K6o_calls } from "./actions/K6o_calls_DB";
import { K6o_folds } from "./actions/K6o_folds_DB";
import { K6o_raises } from "./actions/K6o_raises_DB";

export const K6o = {
  code: "K6o",
  raises: K6o_raises,
  folds: K6o_folds,
  calls: K6o_calls,
};
