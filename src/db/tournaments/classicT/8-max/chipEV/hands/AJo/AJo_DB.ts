import { AJo_calls } from "./actions/AJo_calls_DB";
import { AJo_folds } from "./actions/AJo_folds_DB";
import { AJo_raises } from "./actions/AJo_raises_DB";

export const AJo = {
  code: "AJo",
  raises: AJo_raises,
  folds: AJo_folds,
  calls: AJo_calls,
};
