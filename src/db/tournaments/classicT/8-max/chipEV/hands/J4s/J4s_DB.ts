// J4s.ts
import { J4s_calls } from "./actions/J4s_calls_DB";
import { J4s_folds } from "./actions/J4s_folds_DB";
import { J4s_raises } from "./actions/J4s_raises_DB";

export const J4s = {
  code: "J4s",
  raises: J4s_raises,
  folds: J4s_folds,
  calls: J4s_calls,
};
