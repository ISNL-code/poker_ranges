import { _75o_calls } from "./actions/75o_calls_DB";
import { _75o_folds } from "./actions/75o_folds_DB";
import { _75o_raises } from "./actions/75o_raises_DB";

export const _75o = {
  code: "75o",
  raises: _75o_raises,
  folds: _75o_folds,
  calls: _75o_calls,
};
