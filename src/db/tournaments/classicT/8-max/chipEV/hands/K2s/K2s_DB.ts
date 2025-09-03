// K2s.ts

import { K2s_calls } from "./actions/K2s_calls_DB";
import { K2s_folds } from "./actions/K2s_folds_DB";
import { K2s_raises } from "./actions/K2s_raises_DB";

export const K2s = {
  code: "K2s",
  raises: K2s_raises,
  folds: K2s_folds,
  calls: K2s_calls,
};
