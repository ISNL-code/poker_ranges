import { _83s_calls } from "./actions/83s_calls_DB";
import { _83s_folds } from "./actions/83s_folds_DB";
import { _83s_raises } from "./actions/83s_raises_DB";

export const _83s = {
  code: "83s",
  raises: _83s_raises,
  folds: _83s_folds,
  calls: _83s_calls,
};
