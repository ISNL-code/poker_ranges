// KJs.ts
import { KJs_calls } from "./actions/KJs_calls_DB";
import { KJs_folds } from "./actions/KJs_folds_DB";
import { KJs_raises } from "./actions/KJs_raises_DB";

export const KJs = {
  code: "KJs",
  raises: KJs_raises,
  folds: KJs_folds,
  calls: KJs_calls,
};
