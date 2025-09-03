import { AKs_calls } from "./actions/AKs_calls_DB";
import { AKs_folds } from "./actions/AKs_folds_DB";
import { AKs_raises } from "./actions/AKs_raises_DB";

export const AKs = {
  code: "AKs",
  raises: AKs_raises,
  folds: AKs_folds,
  calls: AKs_calls,
};
