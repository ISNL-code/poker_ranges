import { _99_calls } from "./actions/99_calls_DB";
import { _99_folds } from "./actions/99_folds_DB";
import { _99_raises } from "./actions/99_raises_DB";

export const _99 = {
  code: "99",
  raises: _99_raises,
  folds: _99_folds,
  calls: _99_calls,
};
