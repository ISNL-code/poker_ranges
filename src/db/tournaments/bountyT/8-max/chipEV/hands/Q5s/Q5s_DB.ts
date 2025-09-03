// Q5s.ts
import { Q5o_calls } from "../Q5o/actions/Q5o_calls_DB";
import { Q5s_folds } from "./actions/Q5s_folds_DB";
import { Q5s_raises } from "./actions/Q5s_raises_DB";

export const Q5s = {
  code: "Q5s",
  raises: Q5s_raises,
  folds: Q5s_folds,
  calls: Q5o_calls,
};
