import { T6s_calls } from "./actions/T6s_calls_DB";
import { T6s_folds } from "./actions/T6s_folds_DB";
import { T6s_raises } from "./actions/T6s_raises_DB";

export const T6s = {
  code: "T6s",
  raises: T6s_raises,
  folds: T6s_folds,
  calls: T6s_calls,
};
