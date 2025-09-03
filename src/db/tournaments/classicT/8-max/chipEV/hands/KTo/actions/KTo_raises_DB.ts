// actions/KTo_raises_DB.ts
export const KTo_raises = {
  open_raise: {
    UTG: null,
    UTG1: { min_eff_stack: 25, max_eff_stack: Infinity },
    LJ: { min_eff_stack: 25, max_eff_stack: Infinity },
    HJ: { min_eff_stack: 13, max_eff_stack: Infinity },
    CO: { min_eff_stack: 15, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 17, max_eff_stack: Infinity },
    SB: { min_eff_stack: 17, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 6 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 7 },
    LJ: { min_eff_stack: 0, max_eff_stack: 8 },
    HJ: { min_eff_stack: 0, max_eff_stack: 10 },
    CO: { min_eff_stack: 0, max_eff_stack: 14 },
    BTN: { min_eff_stack: 0, max_eff_stack: 17 },
    SB: { min_eff_stack: 0, max_eff_stack: 14 },
    BB: null,
  },
};
