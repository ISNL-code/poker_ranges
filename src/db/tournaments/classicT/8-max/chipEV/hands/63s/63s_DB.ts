import { _63s_calls } from "./actions/63s_calls_DB";
import { _63s_folds } from "./actions/63s_folds_DB";
import { _63s_raises } from "./actions/63s_raises_DB";

export const _63s = {
  code: "63s",
  raises: _63s_raises,
  folds: _63s_folds,
  calls: _63s_calls,
};
