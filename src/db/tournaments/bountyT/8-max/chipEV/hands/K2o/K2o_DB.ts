// K2o.ts
import { K2o_calls } from "./actions/K2o_calls_DB";
import { K2o_folds } from "./actions/K2o_folds_DB";
import { K2o_raises } from "./actions/K2o_raises_DB";

export const K2o = {
  code: "K2o",
  raises: K2o_raises,
  folds: K2o_folds,
  calls: K2o_calls,
};
