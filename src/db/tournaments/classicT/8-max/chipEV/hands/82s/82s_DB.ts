import { _82s_calls } from "./actions/82s_calls_DB";
import { _82s_folds } from "./actions/82s_folds_DB";
import { _82s_raises } from "./actions/82s_raises_DB";

export const _82s = {
  code: "82s",
  raises: _82s_raises,
  folds: _82s_folds,
  calls: _82s_calls,
};
