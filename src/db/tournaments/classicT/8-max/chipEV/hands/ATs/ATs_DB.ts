import { ATs_calls } from "./actions/ATs_calls_DB";
import { ATs_folds } from "./actions/ATs_folds_DB";
import { ATs_raises } from "./actions/ATs_raises_DB";

export const ATs = {
  code: "ATs",
  raises: ATs_raises,
  folds: ATs_folds,
  calls: ATs_calls,
};
