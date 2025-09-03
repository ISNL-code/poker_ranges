import { _85s_calls } from "./actions/85s_calls_DB";
import { _85s_folds } from "./actions/85s_folds_DB";
import { _85s_raises } from "./actions/85s_raises_DB";

export const _85s = {
  code: "85s",
  raises: _85s_raises,
  folds: _85s_folds,
  calls: _85s_calls,
};
