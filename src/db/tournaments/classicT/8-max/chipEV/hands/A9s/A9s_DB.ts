import { A9s_calls } from "./actions/A9s_calls_DB";
import { A9s_folds } from "./actions/A9s_folds_DB";
import { A9s_raises } from "./actions/A9s_raises_DB";

export const A9s = {
  code: "A9s",
  raises: A9s_raises,
  folds: A9s_folds,
  calls: A9s_calls,
};
