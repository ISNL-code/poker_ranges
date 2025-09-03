import { _98s_calls } from "./actions/98s_calls_DB";
import { _98s_folds } from "./actions/98s_folds_DB";
import { _98s_raises } from "./actions/98s_raises_DB";

export const _98s = {
  code: "98s",
  raises: _98s_raises,
  folds: _98s_folds,
  calls: _98s_calls,
};
