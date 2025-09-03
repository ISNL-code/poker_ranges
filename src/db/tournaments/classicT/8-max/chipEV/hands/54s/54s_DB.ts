import { _54s_calls } from "./actions/54s_calls_DB";
import { _54s_folds } from "./actions/54s_folds_DB";
import { _54s_raises } from "./actions/54s_raises_DB";

export const _54s = {
  code: "54s",
  raises: _54s_raises,
  folds: _54s_folds,
  calls: _54s_calls,
};
