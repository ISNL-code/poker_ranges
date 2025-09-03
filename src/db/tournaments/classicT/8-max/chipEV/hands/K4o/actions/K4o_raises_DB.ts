// actions/K4o_raises_DB.ts
export const K4o_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: null,
    BTN: null,
    SB: { min_eff_stack: 12, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: { min_eff_stack: 0, max_eff_stack: 2 },
    BTN: { min_eff_stack: 0, max_eff_stack: 7 },
    SB: { min_eff_stack: 0, max_eff_stack: 14 },
    BB: null,
  },
};
