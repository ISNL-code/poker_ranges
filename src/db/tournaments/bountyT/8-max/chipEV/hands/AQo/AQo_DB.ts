import { AQo_calls } from "./actions/AQo_calls_DB";
import { AQo_folds } from "./actions/AQo_folds_DB";
import { AQo_raises } from "./actions/AQo_raises_DB";

export const AQo = {
  code: "AQo",
  raises: AQo_raises,
  folds: AQo_folds,
  calls: AQo_calls,
};
