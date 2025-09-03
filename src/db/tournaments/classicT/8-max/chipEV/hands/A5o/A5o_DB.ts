import { A5o_calls } from "./actions/A5o_calls_DB";
import { A5o_folds } from "./actions/A5o_folds_DB";
import { A5o_raises } from "./actions/A5o_raises_DB";

export const A5o = {
  code: "A5o",
  raises: A5o_raises,
  folds: A5o_folds,
  calls: A5o_calls,
};
