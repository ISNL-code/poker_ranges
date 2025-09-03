import { A5s_calls } from "./actions/A5s_calls_DB";
import { A5s_folds } from "./actions/A5s_folds_DB";
import { A5s_raises } from "./actions/A5s_raises_DB";

export const A5s = {
  code: "A5s",
  raises: A5s_raises,
  folds: A5s_folds,
  calls: A5s_calls,
};
