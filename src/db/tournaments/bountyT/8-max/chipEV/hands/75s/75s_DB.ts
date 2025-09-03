import { _75s_calls } from "./actions/75s_calls_DB";
import { _75s_folds } from "./actions/75s_folds_DB";
import { _75s_raises } from "./actions/75s_raises_DB";

export const _75s = {
  code: "75s",
  raises: _75s_raises,
  folds: _75s_folds,
  calls: _75s_calls,
};
