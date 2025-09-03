import { _54o_calls } from "./actions/54o_calls_DB";
import { _54o_folds } from "./actions/54o_folds_DB";
import { _54o_raises } from "./actions/54o_raises_DB";

export const _54o = {
  code: "54o",
  raises: _54o_raises,
  folds: _54o_folds,
  calls: _54o_calls,
};
