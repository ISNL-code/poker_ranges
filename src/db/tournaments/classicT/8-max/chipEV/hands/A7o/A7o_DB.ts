import { A7o_calls } from "./actions/A7o_calls_DB";
import { A7o_folds } from "./actions/A7o_folds_DB";
import { A7o_raises } from "./actions/A7o_raises_DB";

export const A7o = {
  code: "A7o",
  raises: A7o_raises,
  folds: A7o_folds,
  calls: A7o_calls,
};
