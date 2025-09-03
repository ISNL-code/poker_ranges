import { AA_calls } from "./actions/AA_calls_DB";
import { AA_folds } from "./actions/AA_folds_DB";
import { AA_raises } from "./actions/AA_raises_DB";

export const AA = {
  code: "AA",
  raises: AA_raises,
  folds: AA_folds,
  calls: AA_calls,
};
