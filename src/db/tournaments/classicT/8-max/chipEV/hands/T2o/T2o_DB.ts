import { T2o_calls } from "./actions/T2o_calls_DB";
import { T2o_folds } from "./actions/T2o_folds_DB";
import { T2o_raises } from "./actions/T2o_raises_DB";

export const T2o = {
  code: "T2o",
  raises: T2o_raises,
  folds: T2o_folds,
  calls: T2o_calls,
};
