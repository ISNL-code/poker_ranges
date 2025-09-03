// J9o.ts

import { J9o_calls } from "./actions/J9o_calls_DB";
import { J9o_folds } from "./actions/J9o_folds_DB";
import { J9o_raises } from "./actions/J9o_raises_DB";

export const J9o = {
  code: "J9o",
  raises: J9o_raises,
  folds: J9o_folds,
  calls: J9o_calls,
};
