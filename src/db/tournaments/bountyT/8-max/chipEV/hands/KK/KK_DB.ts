import { KK_calls } from "./actions/KK_calls_DB";
import { KK_folds } from "./actions/KK_folds_DB";
import { KK_raises } from "./actions/KK_raises_DB";

export const KK = {
  code: "KK",
  raises: KK_raises,
  folds: KK_folds,
  calls: KK_calls,
};
