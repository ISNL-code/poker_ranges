import { A2s_calls } from "./actions/A2s_calls_DB";
import { A2s_folds } from "./actions/A2s_folds_DB";
import { A2s_raises } from "./actions/A2s_raises_DB";

export const A2s = {
  code: "A2s",
  raises: A2s_raises,
  folds: A2s_folds,
  calls: A2s_calls,
};
