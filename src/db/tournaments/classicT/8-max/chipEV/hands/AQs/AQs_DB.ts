import { AQs_calls } from "./actions/AQs_calls_DB";
import { AQs_folds } from "./actions/AQs_folds_DB";
import { AQs_raises } from "./actions/AQs_raises_DB";

export const AQs = {
  code: "AQs",
  raises: AQs_raises,
  folds: AQs_folds,
  calls: AQs_calls,
};
