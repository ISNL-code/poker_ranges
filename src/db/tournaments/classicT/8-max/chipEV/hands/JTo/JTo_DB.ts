// JTo.ts
import { JTo_calls } from "./actions/JTo_calls_DB";
import { JTo_folds } from "./actions/JTo_folds_DB";
import { JTo_raises } from "./actions/JTo_raises_DB";

export const JTo = {
  code: "JTo",
  raises: JTo_raises,
  folds: JTo_folds,
  calls: JTo_calls,
};
