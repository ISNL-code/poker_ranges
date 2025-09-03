// actions/JTo_raises_DB.ts
export const JTo_raises = {
  open_raise: {
    UTG: { min_eff_stack: 90, max_eff_stack: Infinity },
    UTG1: { min_eff_stack: 85, max_eff_stack: Infinity },
    LJ: { min_eff_stack: 80, max_eff_stack: Infinity },
    HJ: { min_eff_stack: 17, max_eff_stack: Infinity },
    CO: { min_eff_stack: 15, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 17, max_eff_stack: Infinity },
    SB: { min_eff_stack: 14, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 5 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 5 },
    LJ: { min_eff_stack: 0, max_eff_stack: 6 },
    HJ: { min_eff_stack: 0, max_eff_stack: 10 },
    CO: { min_eff_stack: 0, max_eff_stack: 15 },
    BTN: { min_eff_stack: 0, max_eff_stack: 17 },
    SB: { min_eff_stack: 0, max_eff_stack: 12 },
    BB: null,
  },
};
