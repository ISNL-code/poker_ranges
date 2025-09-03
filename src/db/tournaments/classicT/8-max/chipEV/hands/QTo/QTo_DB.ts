// QTo.ts
import { QTo_calls } from "./actions/QTo_calls_DB";
import { QTo_folds } from "./actions/QTo_folds_DB";
import { QTo_raises } from "./actions/QTo_raises_DB";

export const QTo = {
  code: "QTo",
  raises: QTo_raises,
  folds: QTo_folds,
  calls: QTo_calls,
};
