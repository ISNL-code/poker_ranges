import { _92s_calls } from "./actions/92s_calls_DB";
import { _92s_folds } from "./actions/92s_folds_DB";
import { _92s_raises } from "./actions/92s_raises_DB";

export const _92s = {
  code: "92s",
  raises: _92s_raises,
  folds: _92s_folds,
  calls: _92s_calls,
};
