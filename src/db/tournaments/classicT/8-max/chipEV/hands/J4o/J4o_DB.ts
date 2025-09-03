// J4o.ts
import { J4o_calls } from "./actions/J4o_calls_DB";
import { J4o_folds } from "./actions/J4o_folds_DB";
import { J4o_raises } from "./actions/J4o_raises_DB";

export const J4o = {
  code: "J4o",
  raises: J4o_raises,
  folds: J4o_folds,
  calls: J4o_calls,
};
