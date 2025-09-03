import { A3s_calls } from "./actions/A3s_calls_DB";
import { A3s_folds } from "./actions/A3s_folds_DB";
import { A3s_raises } from "./actions/A3s_raises_DB";

export const A3s = {
  code: "A3s",
  raises: A3s_raises,
  folds: A3s_folds,
  calls: A3s_calls,
};
