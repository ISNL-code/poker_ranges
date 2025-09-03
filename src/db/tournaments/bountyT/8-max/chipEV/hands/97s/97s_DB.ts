import { _97s_calls } from "./actions/97s_calls_DB";
import { _97s_folds } from "./actions/97s_folds_DB";
import { _97s_raises } from "./actions/97s_raises_DB";

export const _97s = {
  code: "97s",
  raises: _97s_raises,
  folds: _97s_folds,
  calls: _97s_calls,
};
