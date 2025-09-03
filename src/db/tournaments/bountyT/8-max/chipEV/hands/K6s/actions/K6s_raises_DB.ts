// actions/K6s_raises_DB.ts
export const K6s_raises = {
  open_raise: {
    UTG: { min_eff_stack: 30, max_eff_stack: 80 },
    UTG1: { min_eff_stack: 25, max_eff_stack: Infinity },
    LJ: { min_eff_stack: 20, max_eff_stack: Infinity },
    HJ: { min_eff_stack: 17, max_eff_stack: Infinity },
    CO: { min_eff_stack: 17, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 14, max_eff_stack: Infinity },
    SB: { min_eff_stack: 11, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 4 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 5 },
    LJ: { min_eff_stack: 0, max_eff_stack: 6 },
    HJ: { min_eff_stack: 0, max_eff_stack: 7 },
    CO: { min_eff_stack: 0, max_eff_stack: 9 },
    BTN: { min_eff_stack: 0, max_eff_stack: 14 },
    SB: { min_eff_stack: 0, max_eff_stack: 10 },
    BB: null,
  },
};
