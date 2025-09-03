// J3s.ts
import { J3o_calls } from "../J3o/actions/J3o_calls_DB";
import { J3s_folds } from "./actions/J3s_folds_DB";
import { J3s_raises } from "./actions/J3s_raises_DB";

export const J3s = {
  code: "J3s",
  raises: J3s_raises,
  folds: J3s_folds,
  calls: J3o_calls,
};
