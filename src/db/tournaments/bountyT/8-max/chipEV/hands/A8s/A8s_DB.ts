import { A8s_folds } from "./actions/A8s_folds_DB";
import { A8s_calls } from "./actions/A8s_calls_DB";
import { A8s_raises } from "./actions/A8s_raises_DB";

export const A8s = {
  code: "A8s",
  raises: A8s_raises,
  folds: A8s_folds,
  calls: A8s_calls,
};
