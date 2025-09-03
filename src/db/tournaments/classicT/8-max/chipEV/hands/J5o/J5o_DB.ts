// J5o.ts
import { J5o_calls } from "./actions/J5o_calls_DB";
import { J5o_folds } from "./actions/J5o_folds_DB";
import { J5o_raises } from "./actions/J5o_raises_DB";

export const J5o = {
  code: "J5o",
  raises: J5o_raises,
  folds: J5o_folds,
  calls: J5o_calls,
};
