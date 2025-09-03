// J5s.ts
import { J5s_calls } from "./actions/J5s_calls_DB";
import { J5s_folds } from "./actions/J5s_folds_DB";
import { J5s_raises } from "./actions/J5s_raises_DB";

export const J5s = {
  code: "J5s",
  raises: J5s_raises,
  folds: J5s_folds,
  calls: J5s_calls,
};
