import { _64s_calls } from "./actions/64s_calls_DB";
import { _64s_folds } from "./actions/64s_folds_DB";
import { _64s_raises } from "./actions/64s_raises_DB";

export const _64s = {
  code: "64s",
  raises: _64s_raises,
  folds: _64s_folds,
  calls: _64s_calls,
};
