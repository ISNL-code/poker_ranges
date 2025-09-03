import { _95o_calls } from "./actions/95o_calls_DB";
import { _95o_folds } from "./actions/95o_folds_DB";
import { _95o_raises } from "./actions/95o_raises_DB";

export const _95o = {
  code: "95o",
  raises: _95o_raises,
  folds: _95o_folds,
  calls: _95o_calls,
};
