import { _76s_calls } from "./actions/76s_calls_DB";
import { _76s_folds } from "./actions/76s_folds_DB";
import { _76s_raises } from "./actions/76s_raises_DB";

export const _76s = {
  code: "76s",
  raises: _76s_raises,
  folds: _76s_folds,
  calls: _76s_calls,
};
