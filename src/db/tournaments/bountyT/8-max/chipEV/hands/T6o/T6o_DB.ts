import { T6o_calls } from "./actions/T6o_calls_DB";
import { T6o_folds } from "./actions/T6o_folds_DB";
import { T6o_raises } from "./actions/T6o_raises_DB";

export const T6o = {
  code: "T6o",
  raises: T6o_raises,
  folds: T6o_folds,
  calls: T6o_calls,
};
