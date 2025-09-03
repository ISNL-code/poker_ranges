import { _86s_calls } from "./actions/86s_calls_DB";
import { _86s_folds } from "./actions/86s_folds_DB";
import { _86s_raises } from "./actions/86s_raises_DB";

export const _86s = {
  code: "86s",
  raises: _86s_raises,
  folds: _86s_folds,
  calls: _86s_calls,
};
