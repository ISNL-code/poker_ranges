import { AKo_calls } from "./actions/AKo_calls_DB";
import { AKo_folds } from "./actions/AKo_folds_DB";
import { AKo_raises } from "./actions/AKo_raises_DB";

export const AKo = {
  code: "AKo",
  raises: AKo_raises,
  folds: AKo_folds,
  calls: AKo_calls,
};
