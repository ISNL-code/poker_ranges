// J2o.ts
import { J2o_calls } from "./actions/J2o_calls_DB";
import { J2o_folds } from "./actions/J2o_folds_DB";
import { J2o_raises } from "./actions/J2o_raises_DB";

export const J2o = {
  code: "J2o",
  raises: J2o_raises,
  folds: J2o_folds,
  calls: J2o_calls,
};
