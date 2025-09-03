import { _53s_calls } from "./actions/53s_calls_DB";
import { _53s_folds } from "./actions/53s_folds_DB";
import { _53s_raises } from "./actions/53s_raises_DB";

export const _53s = {
  code: "53s",
  raises: _53s_raises,
  folds: _53s_folds,
  calls: _53s_calls,
};
