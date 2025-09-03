import { _95s_calls } from "./actions/95s_calls_DB";
import { _95s_folds } from "./actions/95s_folds_DB";
import { _95s_raises } from "./actions/95s_raises_DB";

export const _95s = {
  code: "95s",
  raises: _95s_raises,
  folds: _95s_folds,
  calls: _95s_calls,
};
