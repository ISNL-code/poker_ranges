// actions/K7o_raises_DB.ts
export const K7o_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: null,
    BTN: { min_eff_stack: 17, max_eff_stack: Infinity },
    SB: { min_eff_stack: 17, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: null,
    UTG1: null,
    LJ: { min_eff_stack: 0, max_eff_stack: 2 },
    HJ: { min_eff_stack: 0, max_eff_stack: 3 },
    CO: { min_eff_stack: 0, max_eff_stack: 5 },
    BTN: { min_eff_stack: 0, max_eff_stack: 9 },
    SB: { min_eff_stack: 0, max_eff_stack: 17 },
    BB: null,
  },
};
