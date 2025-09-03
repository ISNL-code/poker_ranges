import { A3o_calls } from "./actions/A3o_calls_DB";
import { A3o_folds } from "./actions/A3o_folds_DB";
import { A3o_raises } from "./actions/A3o_raises_DB";

export const A3o = {
  code: "A3o",
  raises: A3o_raises,
  folds: A3o_folds,
  calls: A3o_calls,
};
