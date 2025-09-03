import { T5s_calls } from "./actions/T5s_calls_DB";
import { T5s_folds } from "./actions/T5s_folds_DB";
import { T5s_raises } from "./actions/T5s_raises_DB";

export const T5s = {
  code: "T5s",
  raises: T5s_raises,
  folds: T5s_folds,
  calls: T5s_calls,
};
