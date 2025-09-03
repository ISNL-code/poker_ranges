import { _43o_calls } from "./actions/43o_calls_DB";
import { _43o_folds } from "./actions/43o_folds_DB";
import { _43o_raises } from "./actions/43o_raises_DB";

export const _43o = {
  code: "43o",
  raises: _43o_raises,
  folds: _43o_folds,
  calls: _43o_calls,
};
