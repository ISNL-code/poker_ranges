// QJo.ts
import { QJo_calls } from "./actions/QJo_calls_DB";
import { QJo_folds } from "./actions/QJo_folds_DB";
import { QJo_raises } from "./actions/QJo_raises_DB";

export const QJo = {
  code: "QJo",
  raises: QJo_raises,
  folds: QJo_folds,
  calls: QJo_calls,
};
