// KJo.ts
import { KJo_calls } from "./actions/KJo_calls_DB";
import { KJo_folds } from "./actions/KJo_folds_DB";
import { KJo_raises } from "./actions/KJo_raises_DB";

export const KJo = {
  code: "KJo",
  raises: KJo_raises,
  folds: KJo_folds,
  calls: KJo_calls,
};
