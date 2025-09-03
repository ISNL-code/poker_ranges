// J2s.ts
import { J2s_calls } from "./actions/J2s_calls_DB";
import { J2s_folds } from "./actions/J2s_folds_DB";
import { J2s_raises } from "./actions/J2s_raises_DB";

export const J2s = {
  code: "J2s",
  raises: J2s_raises,
  folds: J2s_folds,
  calls: J2s_calls,
};
