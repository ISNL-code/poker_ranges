// J7o.ts
import { J7o_calls } from "./actions/J7o_calls_DB";
import { J7o_folds } from "./actions/J7o_folds_DB";
import { J7o_raises } from "./actions/J7o_raises_DB";

export const J7o = {
  code: "J7o",
  raises: J7o_raises,
  folds: J7o_folds,
  calls: J7o_calls,
};
