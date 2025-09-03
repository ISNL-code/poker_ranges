import { _84s_calls } from "./actions/84s_calls_DB";
import { _84s_folds } from "./actions/84s_folds_DB";
import { _84s_raises } from "./actions/84s_raises_DB";

export const _84s = {
  code: "84s",
  raises: _84s_raises,
  folds: _84s_folds,
  calls: _84s_calls,
};
