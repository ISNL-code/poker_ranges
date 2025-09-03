import { _65s_calls } from "./actions/65s_calls_DB";
import { _65s_folds } from "./actions/65s_folds_DB";
import { _65s_raises } from "./actions/65s_raises_DB";

export const _65s = {
  code: "65s",
  raises: _65s_raises,
  folds: _65s_folds,
  calls: _65s_calls,
};
