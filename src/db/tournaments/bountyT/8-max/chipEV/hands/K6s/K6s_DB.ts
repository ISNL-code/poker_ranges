// K6s.ts

import { K6s_calls } from "./actions/K6s_calls_DB";
import { K6s_folds } from "./actions/K6s_folds_DB";
import { K6s_raises } from "./actions/K6s_raises_DB";

export const K6s = {
  code: "K6s",
  raises: K6s_raises,
  folds: K6s_folds,
  calls: K6s_calls,
};
