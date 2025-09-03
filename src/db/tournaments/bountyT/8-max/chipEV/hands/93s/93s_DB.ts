import { _93s_calls } from "./actions/93s_calls_DB";
import { _93s_folds } from "./actions/93s_folds_DB";
import { _93s_raises } from "./actions/93s_raises_DB";

export const _93s = {
  code: "93s",
  raises: _93s_raises,
  folds: _93s_folds,
  calls: _93s_calls,
};
