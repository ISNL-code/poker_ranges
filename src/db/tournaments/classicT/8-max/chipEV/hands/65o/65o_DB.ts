import { _65o_calls } from "./actions/65o_calls_DB";
import { _65o_folds } from "./actions/65o_folds_DB";
import { _65o_raises } from "./actions/65o_raises_DB";

export const _65o = {
  code: "65o",
  raises: _65o_raises,
  folds: _65o_folds,
  calls: _65o_calls,
};
