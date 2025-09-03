import { _32s_calls } from "./actions/32s_calls_DB";
import { _32s_folds } from "./actions/32s_folds_DB";
import { _32s_raises } from "./actions/32s_raises_DB";

export const _32s = {
  code: "32s",
  raises: _32s_raises,
  folds: _32s_folds,
  calls: _32s_calls,
};
