// QQ.ts
import { QQ_calls } from "./actions/QQ_calls_DB";
import { QQ_folds } from "./actions/QQ_folds_DB";
import { QQ_raises } from "./actions/QQ_raises_DB";

export const QQ = {
  code: "QQ",
  raises: QQ_raises,
  folds: QQ_folds,
  calls: QQ_calls,
};
