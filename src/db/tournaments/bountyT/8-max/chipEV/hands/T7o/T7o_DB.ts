import { T7o_calls } from "./actions/T7o_calls_DB";
import { T7o_folds } from "./actions/T7o_folds_DB";
import { T7o_raises } from "./actions/T7o_raises_DB";

export const T7o = {
  code: "T7o",
  raises: T7o_raises,
  folds: T7o_folds,
  calls: T7o_calls,
};
