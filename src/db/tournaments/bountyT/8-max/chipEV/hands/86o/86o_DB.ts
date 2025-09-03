import { _86o_calls } from "./actions/86o_calls_DB";
import { _86o_folds } from "./actions/86o_folds_DB";
import { _86o_raises } from "./actions/86o_raises_DB";

export const _86o = {
  code: "86o",
  raises: _86o_raises,
  folds: _86o_folds,
  calls: _86o_calls,
};
