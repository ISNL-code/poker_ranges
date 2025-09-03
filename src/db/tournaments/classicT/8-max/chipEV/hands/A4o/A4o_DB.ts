import { A4o_calls } from "./actions/A4o_calls_DB";
import { A4o_folds } from "./actions/A4o_folds_DB";
import { A4o_raises } from "./actions/A4o_raises_DB";

export const A4o = {
  code: "A4o",
  raises: A4o_raises,
  folds: A4o_folds,
  calls: A4o_calls,
};
