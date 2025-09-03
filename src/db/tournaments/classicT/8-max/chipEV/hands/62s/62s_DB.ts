import { _62s_calls } from "./actions/62s_calls_DB";
import { _62s_folds } from "./actions/62s_folds_DB";
import { _62s_raises } from "./actions/62s_raises_DB";

export const _62s = {
  code: "62s",
  raises: _62s_raises,
  folds: _62s_folds,
  calls: _62s_calls,
};
