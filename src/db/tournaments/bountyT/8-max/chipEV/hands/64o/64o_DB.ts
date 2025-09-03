import { _64o_calls } from "./actions/64o_calls_DB";
import { _64o_folds } from "./actions/64o_folds_DB";
import { _64o_raises } from "./actions/64o_raises_DB";

export const _64o = {
  code: "64o",
  raises: _64o_raises,
  folds: _64o_folds,
  calls: _64o_calls,
};
