import { _42o_calls } from "./actions/42o_calls_DB";
import { _42o_folds } from "./actions/42o_folds_DB";
import { _42o_raises } from "./actions/42o_raises_DB";

export const _42o = {
  code: "42o",
  raises: _42o_raises,
  folds: _42o_folds,
  calls: _42o_calls,
};
