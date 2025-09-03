import { _53o_calls } from "./actions/53o_calls_DB";
import { _53o_folds } from "./actions/53o_folds_DB";
import { _53o_raises } from "./actions/53o_raises_DB";

export const _53o = {
  code: "53o",
  raises: _53o_raises,
  folds: _53o_folds,
  calls: _53o_calls,
};
