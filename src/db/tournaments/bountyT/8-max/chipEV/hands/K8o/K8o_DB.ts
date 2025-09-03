// K8o.ts
import { K8o_calls } from "./actions/K8o_calls_DB";
import { K8o_folds } from "./actions/K8o_folds_DB";
import { K8o_raises } from "./actions/K8o_raises_DB";

export const K8o = {
  code: "K8o",
  raises: K8o_raises,
  folds: K8o_folds,
  calls: K8o_calls,
};
