import { _52s_calls } from "./actions/52s_calls_DB";
import { _52s_folds } from "./actions/52s_folds_DB";
import { _52s_raises } from "./actions/52s_raises_DB";

export const _52s = {
  code: "52s",
  raises: _52s_raises,
  folds: _52s_folds,
  calls: _52s_calls,
};
