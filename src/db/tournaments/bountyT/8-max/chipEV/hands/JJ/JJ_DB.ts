// JJ.ts
import { JJ_calls } from "./actions/JJ_calls_DB";
import { JJ_folds } from "./actions/JJ_folds_DB";
import { JJ_raises } from "./actions/JJ_raises_DB";

export const JJ = {
  code: "JJ",
  raises: JJ_raises,
  folds: JJ_folds,
  calls: JJ_calls,
};
