import { A4s_calls } from "./actions/A4s_calls_DB";
import { A4s_folds } from "./actions/A4s_folds_DB";
import { A4s_raises } from "./actions/A4s_raises_DB";

export const A4s = {
  code: "A4s",
  raises: A4s_raises,
  folds: A4s_folds,
  calls: A4s_calls,
};
