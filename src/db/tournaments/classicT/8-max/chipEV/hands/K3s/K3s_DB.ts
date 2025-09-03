// K3s.ts
import { K3s_calls } from "./actions/K3s_calls_DB";
import { K3s_folds } from "./actions/K3s_folds_DB";
import { K3s_raises } from "./actions/K3s_raises_DB";

export const K3s = {
  code: "K3s",
  raises: K3s_raises,
  folds: K3s_folds,
  calls: K3s_calls,
};
