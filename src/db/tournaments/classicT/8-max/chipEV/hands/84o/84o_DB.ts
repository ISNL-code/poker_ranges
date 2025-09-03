import { _84o_calls } from "./actions/84o_calls_DB";
import { _84o_folds } from "./actions/84o_folds_DB";
import { _84o_raises } from "./actions/84o_raises_DB";

export const _84o = {
  code: "84o",
  raises: _84o_raises,
  folds: _84o_folds,
  calls: _84o_calls,
};
