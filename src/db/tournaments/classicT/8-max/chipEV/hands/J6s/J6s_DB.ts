// J6s.ts
import { J6s_calls } from "./actions/J6s_calls_DB";
import { J6s_folds } from "./actions/J6s_folds_DB";
import { J6s_raises } from "./actions/J6s_raises_DB";

export const J6s = {
  code: "J6s",
  raises: J6s_raises,
  folds: J6s_folds,
  calls: J6s_calls,
};
