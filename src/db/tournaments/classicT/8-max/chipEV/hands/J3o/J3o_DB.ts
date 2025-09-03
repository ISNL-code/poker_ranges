// J3o.ts
import { J3o_calls } from "./actions/J3o_calls_DB";
import { J3o_folds } from "./actions/J3o_folds_DB";
import { J3o_raises } from "./actions/J3o_raises_DB";

export const J3o = {
  code: "J3o",
  raises: J3o_raises,
  folds: J3o_folds,
  calls: J3o_calls,
};
