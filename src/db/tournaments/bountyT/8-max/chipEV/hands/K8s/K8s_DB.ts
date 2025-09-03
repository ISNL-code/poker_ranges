// K8s.ts
import { K8s_calls } from "./actions/K8s_calls_DB";
import { K8s_folds } from "./actions/K8s_folds_DB";
import { K8s_raises } from "./actions/K8s_raises_DB";

export const K8s = {
  code: "K8s",
  raises: K8s_raises,
  folds: K8s_folds,
  calls: K8s_calls,
};
