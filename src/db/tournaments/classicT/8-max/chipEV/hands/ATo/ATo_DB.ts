import { ATo_calls } from "./actions/ATo_calls_DB";
import { ATo_folds } from "./actions/ATo_folds_DB";
import { ATo_raises } from "./actions/ATo_raises_DB";

export const ATo = {
  code: "ATo",
  raises: ATo_raises,
  folds: ATo_folds,
  calls: ATo_calls,
};
