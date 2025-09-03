// KTo.ts
import { KTo_calls } from "./actions/KTo_calls_DB";
import { KTo_folds } from "./actions/KTo_folds_DB";
import { KTo_raises } from "./actions/KTo_raises_DB";

export const KTo = {
  code: "KTo",
  raises: KTo_raises,
  folds: KTo_folds,
  calls: KTo_calls,
};
