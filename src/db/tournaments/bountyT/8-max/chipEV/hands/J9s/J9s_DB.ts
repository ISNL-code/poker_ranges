// J9s.ts
import { J9s_calls } from "./actions/J9s_calls_DB";
import { J9s_folds } from "./actions/J9s_folds_DB";
import { J9s_raises } from "./actions/J9s_raises_DB";

export const J9s = {
  code: "J9s",
  raises: J9s_raises,
  folds: J9s_folds,
  calls: J9s_calls,
};
