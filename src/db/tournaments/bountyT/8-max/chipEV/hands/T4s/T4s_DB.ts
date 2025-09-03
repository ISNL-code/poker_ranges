import { T4s_calls } from "./actions/T4s_calls_DB";
import { T4s_folds } from "./actions/T4s_folds_DB";
import { T4s_raises } from "./actions/T4s_raises_DB";

export const T4s = {
  code: "T4s",
  raises: T4s_raises,
  folds: T4s_folds,
  calls: T4s_calls,
};
