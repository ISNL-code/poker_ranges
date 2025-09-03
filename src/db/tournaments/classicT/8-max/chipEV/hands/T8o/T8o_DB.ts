import { T8o_calls } from "./actions/T8o_calls_DB";
import { T8o_folds } from "./actions/T8o_folds_DB";
import { T8o_raises } from "./actions/T8o_raises_DB";

export const T8o = {
  code: "T8o",
  raises: T8o_raises,
  folds: T8o_folds,
  calls: T8o_calls,
};
