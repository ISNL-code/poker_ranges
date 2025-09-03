import { AJs_calls } from "./actions/AJs_calls_DB";
import { AJs_folds } from "./actions/AJs_folds_DB";
import { AJs_raises } from "./actions/AJs_raises_DB";

export const AJs = {
  code: "AJs",
  raises: AJs_raises,
  folds: AJs_folds,
  calls: AJs_calls,
};
