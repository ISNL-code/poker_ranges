import { T3s_calls } from "./actions/T3s_calls_DB";
import { T3s_folds } from "./actions/T3s_folds_DB";
import { T3s_raises } from "./actions/T3s_raises_DB";

export const T3s = {
  code: "T3s",
  raises: T3s_raises,
  folds: T3s_folds,
  calls: T3s_calls,
};
