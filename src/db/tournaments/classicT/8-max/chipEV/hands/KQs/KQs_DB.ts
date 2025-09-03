// KQs.ts
import { KQs_calls } from "./actions/KQs_calls_DB";
import { KQs_folds } from "./actions/KQs_folds_DB";
import { KQs_raises } from "./actions/KQs_raises_DB";

export const KQs = {
  code: "KQs",
  raises: KQs_raises,
  folds: KQs_folds,
  calls: KQs_calls,
};
