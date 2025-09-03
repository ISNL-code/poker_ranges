import { T9o_calls } from "./actions/T9o_calls_DB";
import { T9o_folds } from "./actions/T9o_folds_DB";
import { T9o_raises } from "./actions/T9o_raises_DB";

export const T9o = {
  code: "T9o",
  raises: T9o_raises,
  folds: T9o_folds,
  calls: T9o_calls,
};
