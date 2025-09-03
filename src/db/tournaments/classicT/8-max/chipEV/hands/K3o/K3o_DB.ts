// K3o.ts
import { K3o_calls } from "./actions/K3o_calls_DB";
import { K3o_folds } from "./actions/K3o_folds_DB";
import { K3o_raises } from "./actions/K3o_raises_DB";

export const K3o = {
  code: "K3o",
  raises: K3o_raises,
  folds: K3o_folds,
  calls: K3o_calls,
};
