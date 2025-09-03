import { T8s_calls } from "./actions/T8s_calls_DB";
import { T8s_folds } from "./actions/T8s_folds_DB";
import { T8s_raises } from "./actions/T8s_raises_DB";

export const T8s = {
  code: "T8s",
  raises: T8s_raises,
  folds: T8s_folds,
  calls: T8s_calls,
};
