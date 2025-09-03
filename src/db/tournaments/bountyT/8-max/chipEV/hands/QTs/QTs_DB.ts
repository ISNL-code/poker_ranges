// QTs.ts
import { QTs_calls } from "./actions/QTs_calls_DB";
import { QTs_folds } from "./actions/QTs_folds_DB";
import { QTs_raises } from "./actions/QTs_raises_DB";

export const QTs = {
  code: "QTs",
  raises: QTs_raises,
  folds: QTs_folds,
  calls: QTs_calls,
};
