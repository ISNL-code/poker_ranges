import { _82o_calls } from "./actions/82o_calls_DB";
import { _82o_folds } from "./actions/82o_folds_DB";
import { _82o_raises } from "./actions/82o_raises_DB";

export const _82o = {
  code: "82o",
  raises: _82o_raises,
  folds: _82o_folds,
  calls: _82o_calls,
};
