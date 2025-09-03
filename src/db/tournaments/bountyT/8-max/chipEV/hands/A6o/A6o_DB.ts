import { A6o_calls } from "./actions/A6o_calls_DB";
import { A6o_folds } from "./actions/A6o_folds_DB";
import { A6o_raises } from "./actions/A6o_raises_DB";

export const A6o = {
  code: "A6o",
  raises: A6o_raises,
  folds: A6o_folds,
  calls: A6o_calls,
};
