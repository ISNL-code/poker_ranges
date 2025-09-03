import { T7s_calls } from "./actions/T7s_calls_DB";
import { T7s_folds } from "./actions/T7s_folds_DB";
import { T7s_raises } from "./actions/T7s_raises_DB";

export const T7s = {
  code: "T7s",
  raises: T7s_raises,
  folds: T7s_folds,
  calls: T7s_calls,
};
