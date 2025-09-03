import { T5o_calls } from "./actions/T5o_calls_DB";
import { T5o_folds } from "./actions/T5o_folds_DB";
import { T5o_raises } from "./actions/T5o_raises_DB";

export const T5o = {
  code: "T5o",
  raises: T5o_raises,
  folds: T5o_folds,
  calls: T5o_calls,
};
