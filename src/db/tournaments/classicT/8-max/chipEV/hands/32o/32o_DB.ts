import { _32o_calls } from "./actions/32o_calls_DB";
import { _32o_folds } from "./actions/32o_folds_DB";
import { _32o_raises } from "./actions/32o_raises_DB";

export const _32o = {
  code: "32o",
  raises: _32o_raises,
  folds: _32o_folds,
  cslls: _32o_calls,
};
