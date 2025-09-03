// Q6o.ts
import { Q6o_calls } from "./actions/Q6o_calls_DB";
import { Q6o_folds } from "./actions/Q6o_folds_DB";
import { Q6o_raises } from "./actions/Q6o_raises_DB";

export const Q6o = {
  code: "Q6o",
  raises: Q6o_raises,
  folds: Q6o_folds,
  calls: Q6o_calls,
};
