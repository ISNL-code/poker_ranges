// J7s.ts
import { J7s_calls } from "./actions/J7s_calls_DB";
import { J7s_folds } from "./actions/J7s_folds_DB";
import { J7s_raises } from "./actions/J7s_raises_DB";

export const J7s = {
  code: "J7s",
  raises: J7s_raises,
  folds: J7s_folds,
  calls: J7s_calls,
};
