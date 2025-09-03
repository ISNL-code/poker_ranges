// KTs.ts
import { KTs_calls } from "./actions/KTs_calls_DB";
import { KTs_folds } from "./actions/KTs_folds_DB";
import { KTs_raises } from "./actions/KTs_raises_DB";

export const KTs = {
  code: "KTs",
  raises: KTs_raises,
  folds: KTs_folds,
  calls: KTs_calls,
};
