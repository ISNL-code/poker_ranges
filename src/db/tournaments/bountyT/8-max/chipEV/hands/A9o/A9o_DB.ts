import { A9o_calls } from "./actions/A9o_calls_DB";
import { A9o_folds } from "./actions/A9o_folds_DB";
import { A9o_raises } from "./actions/A9o_raises_DB";

export const A9o = {
  code: "A9o",
  raises: A9o_raises,
  folds: A9o_folds,
  calls: A9o_calls,
};
