// J8s.ts
import { J8s_calls } from "./actions/J8s_calls_DB";
import { J8s_folds } from "./actions/J8s_folds_DB";
import { J8s_raises } from "./actions/J8s_raises_DB";

export const J8s = {
  code: "J8s",
  raises: J8s_raises,
  folds: J8s_folds,
  calls: J8s_calls,
};
