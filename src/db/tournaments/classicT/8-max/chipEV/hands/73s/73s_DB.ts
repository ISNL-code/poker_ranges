import { _73s_calls } from "./actions/73s_calls_DB";
import { _73s_folds } from "./actions/73s_folds_DB";
import { _73s_raises } from "./actions/73s_raises_DB";

export const _73s = {
  code: "73s",
  raises: _73s_raises,
  folds: _73s_folds,
  calls: _73s_calls,
};
