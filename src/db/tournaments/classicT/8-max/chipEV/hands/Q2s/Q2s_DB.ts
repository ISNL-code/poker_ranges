// файл Q2s.ts
import { Q2s_calls } from "./actions/Q2s_calls_DB";
import { Q2s_folds } from "./actions/Q2s_folds_DB";
import { Q2s_raises } from "./actions/Q2s_raises_DB";

export const Q2s = {
  code: "Q2s",
  raises: Q2s_raises,
  folds: Q2s_folds,
  calls: Q2s_calls,
};
