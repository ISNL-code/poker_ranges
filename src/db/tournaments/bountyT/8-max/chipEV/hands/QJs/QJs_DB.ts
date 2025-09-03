// QJs.ts
import { QJs_calls } from "./actions/QJs_calls_DB";
import { QJs_folds } from "./actions/QJs_folds_DB";
import { QJs_raises } from "./actions/QJs_raises_DB";

export const QJs = {
  code: "QJs",
  raises: QJs_raises,
  folds: QJs_folds,
  calls: QJs_calls,
};
