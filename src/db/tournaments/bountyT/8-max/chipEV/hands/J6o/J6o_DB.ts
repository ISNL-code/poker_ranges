// J6o.ts
import { J6o_calls } from "./actions/J6o_calls_DB";
import { J6o_folds } from "./actions/J6o_folds_DB";
import { J6o_raises } from "./actions/J6o_raises_DB";

export const J6o = {
  code: "J6o",
  raises: J6o_raises,
  folds: J6o_folds,
  calls: J6o_calls,
};
