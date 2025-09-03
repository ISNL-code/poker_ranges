import { A7s_calls } from "./actions/A7s_calls_DB";
import { A7s_folds } from "./actions/A7s_folds_DB";
import { A7s_raises } from "./actions/A7s_raises_DB";

export const A7s = {
  code: "A7s",
  raises: A7s_raises,
  folds: A7s_folds,
  calls: A7s_calls,
};
