import { _42s_calls } from "./actions/42s_calls_DB";
import { _42s_folds } from "./actions/42s_folds_DB";
import { _42s_raises } from "./actions/42s_raises_DB";

export const _42s = {
  code: "42s",
  raises: _42s_raises,
  folds: _42s_folds,
  calls: _42s_calls,
};
