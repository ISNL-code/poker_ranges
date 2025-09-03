import { A6s_raises } from "./actions/A6s_raises_DB";
import { A6s_folds } from "./actions/A6s_folds_DB";
import { A6s_calls } from "./actions/A6s_calls_DB";

export const A6s = {
  code: "A6s",
  raises: A6s_raises,
  folds: A6s_folds,
  calls: A6s_calls,
};
