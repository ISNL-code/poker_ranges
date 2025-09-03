// Q7o.ts
import { Q7o_calls } from "./actions/Q7o_calls_DB";
import { Q7o_folds } from "./actions/Q7o_folds_DB";
import { Q7o_raises } from "./actions/Q7o_raises_DB";

export const Q7o = {
  code: "Q7o",
  raises: Q7o_raises,
  folds: Q7o_folds,
  calls: Q7o_calls,
};
