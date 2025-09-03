import { T2s_calls } from "./actions/T2s_calls_DB";
import { T2s_folds } from "./actions/T2s_folds_DB";
import { T2s_raises } from "./actions/T2s_raises_DB";

export const T2s = {
  code: "T2s",
  raises: T2s_raises,
  folds: T2s_folds,
  calls: T2s_calls,
};
