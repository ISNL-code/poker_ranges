// actions/Q4s_raises_DB.ts
export const Q4s_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: { min_eff_stack: 25, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 17, max_eff_stack: Infinity },
    SB: { min_eff_stack: 25, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: null,
    UTG1: null,
    LJ: { min_eff_stack: 0, max_eff_stack: 2 },
    HJ: { min_eff_stack: 0, max_eff_stack: 2 },
    CO: { min_eff_stack: 0, max_eff_stack: 4 },
    BTN: { min_eff_stack: 0, max_eff_stack: 8 },
    SB: { min_eff_stack: 0, max_eff_stack: 10 },
    BB: null,
  },
};
