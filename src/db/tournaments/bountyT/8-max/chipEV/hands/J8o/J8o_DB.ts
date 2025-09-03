// J8o.ts
import { J8o_calls } from "./actions/J8o_calls_DB";
import { J8o_folds } from "./actions/J8o_folds_DB";
import { J8o_raises } from "./actions/J8o_raises_DB";

export const J8o = {
  code: "J8o",
  raises: J8o_raises,
  folds: J8o_folds,
  calls: J8o_calls,
};
