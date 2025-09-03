import { _96s_calls } from "./actions/96s_calls_DB";
import { _96s_folds } from "./actions/96s_folds_DB";
import { _96s_raises } from "./actions/96s_raises_DB";

export const _96s = {
  code: "96s",
  raises: _96s_raises,
  folds: _96s_folds,
  calls: _96s_calls,
};
