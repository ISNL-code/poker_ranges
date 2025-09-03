// actions/Q3s_raises_DB.ts
export const Q3s_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: { min_eff_stack: 100, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 24, max_eff_stack: Infinity },
    SB: { min_eff_stack: 30, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: { min_eff_stack: 0, max_eff_stack: 2 },
    CO: { min_eff_stack: 0, max_eff_stack: 3 },
    BTN: { min_eff_stack: 0, max_eff_stack: 7 },
    SB: { min_eff_stack: 0, max_eff_stack: 12 },
    BB: null,
  },
};
