import { T9s_calls } from "./actions/T9s_calls_DB";
import { T9s_folds } from "./actions/T9s_folds_DB";
import { T9s_raises } from "./actions/T9s_raises_DB";

export const T9s = {
  code: "T9s",
  raises: T9s_raises,
  folds: T9s_folds,
  calls: T9s_calls,
};
