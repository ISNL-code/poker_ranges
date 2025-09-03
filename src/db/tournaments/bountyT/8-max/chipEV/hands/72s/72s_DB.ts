import { _72s_calls } from "./actions/72s_calls_DB";
import { _72s_folds } from "./actions/72s_folds_DB";
import { _72s_raises } from "./actions/72s_raises_DB";

export const _72s = {
  code: "72s",
  raises: _72s_raises,
  folds: _72s_folds,
  calls: _72s_calls,
};
