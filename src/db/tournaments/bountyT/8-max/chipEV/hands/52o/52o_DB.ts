import { _52o_calls } from "./actions/52o_calls_DB";
import { _52o_folds } from "./actions/52o_folds_DB";
import { _52o_raises } from "./actions/52o_raises_DB";

export const _52o = {
  code: "52o",
  raises: _52o_raises,
  folds: _52o_folds,
  calls: _52o_calls,
};
