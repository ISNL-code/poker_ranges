import { _96o_calls } from "./actions/96o_calls_DB";
import { _96o_folds } from "./actions/96o_folds_DB";
import { _96o_raises } from "./actions/96o_raises_DB";

export const _96o = {
  code: "96o",
  raises: _96o_raises,
  folds: _96o_folds,
  calls: _96o_calls,
};
