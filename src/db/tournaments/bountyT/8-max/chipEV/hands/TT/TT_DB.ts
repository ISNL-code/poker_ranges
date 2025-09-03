import { TT_calls } from "./actions/TT_calls_DB";
import { TT_folds } from "./actions/TT_folds_DB";
import { TT_raises } from "./actions/TT_raises_DB";

export const TT = {
  code: "TT",
  raises: TT_raises,
  folds: TT_folds,
  calls: TT_calls,
};
