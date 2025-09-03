// файл Q2o.ts
import { Q2o_calls } from "./actions/Q2o_calls_DB";
import { Q2o_folds } from "./actions/Q2o_folds_DB";
import { Q2o_raises } from "./actions/Q2o_raises_DB";

export const Q2o = {
  code: "Q2o",
  raises: Q2o_raises,
  folds: Q2o_folds,
  calls: Q2o_calls,
};
