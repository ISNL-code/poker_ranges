// actions/K2s_raises_DB.ts
export const K2s_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: { min_eff_stack: 30, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 17, max_eff_stack: Infinity },
    SB: { min_eff_stack: 14, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 2 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 2 },
    LJ: { min_eff_stack: 0, max_eff_stack: 3 },
    HJ: { min_eff_stack: 0, max_eff_stack: 4 },
    CO: { min_eff_stack: 0, max_eff_stack: 6 },
    BTN: { min_eff_stack: 0, max_eff_stack: 9 },
    SB: { min_eff_stack: 0, max_eff_stack: 13 },
    BB: null,
  },
};
