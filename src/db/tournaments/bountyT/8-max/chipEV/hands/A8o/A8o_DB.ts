import { A8o_calls } from "./actions/A8o_calls_DB";
import { A8o_folds } from "./actions/A8o_folds_DB";
import { A8o_raises } from "./actions/A8o_raises_DB";

export const A8o = {
  code: "A8o",
  raises: A8o_raises,
  folds: A8o_folds,
  calls: A8o_calls,
};
