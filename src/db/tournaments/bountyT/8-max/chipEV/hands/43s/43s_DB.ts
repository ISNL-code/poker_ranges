import { _43s_calls } from "./actions/43s_calls_DB";
import { _43s_folds } from "./actions/43s_folds_DB";
import { _43s_raises } from "./actions/43s_raises_DB";

export const _43s = {
  code: "43s",
  raises: _43s_raises,
  folds: _43s_folds,
  calls: _43s_calls,
};
