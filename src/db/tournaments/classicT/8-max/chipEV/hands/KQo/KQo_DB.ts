// KQo.ts
import { KQo_calls } from "./actions/KQo_calls_DB";
import { KQo_folds } from "./actions/KQo_folds_DB";
import { KQo_raises } from "./actions/KQo_raises_DB";

export const KQo = {
  code: "KQo",
  raises: KQo_raises,
  folds: KQo_folds,
  calls: KQo_calls,
};
