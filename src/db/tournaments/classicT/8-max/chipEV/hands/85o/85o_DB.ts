import { _85o_calls } from "./actions/85o_calls_DB";
import { _85o_folds } from "./actions/85o_folds_DB";
import { _85o_raises } from "./actions/85o_raises_DB";

export const _85o = {
  code: "85o",
  raises: _85o_raises,
  folds: _85o_folds,
  calls: _85o_calls,
};
