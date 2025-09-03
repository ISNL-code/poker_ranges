// JTs.ts
import { JTs_calls } from "./actions/JTs_calls_DB";
import { JTs_folds } from "./actions/JTs_folds_DB";
import { JTs_raises } from "./actions/JTs_raises_DB";

export const JTs = {
  code: "JTs",
  raises: JTs_raises,
  folds: JTs_folds,
  calls: JTs_calls,
};
