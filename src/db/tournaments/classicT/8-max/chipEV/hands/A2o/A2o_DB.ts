import { A2o_calls } from "./actions/A2o_calls_DB";
import { A2o_folds } from "./actions/A2o_folds_DB";
import { A2o_raises } from "./actions/A2o_raises_DB";

export const A2o = {
  code: "A2o",
  raises: A2o_raises,
  folds: A2o_folds,
  calls: A2o_calls,
};
