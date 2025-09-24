// actions/J9s_raises_DB.ts
export const J9s_raises = {
  open_raise: {
    UTG: { min_eff_stack: 14, max_eff_stack: Infinity },
    UTG1: { min_eff_stack: 6, max_eff_stack: Infinity },
    LJ: { min_eff_stack: 6, max_eff_stack: Infinity },
    HJ: { min_eff_stack: 6, max_eff_stack: Infinity },
    CO: { min_eff_stack: 6, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 6, max_eff_stack: Infinity },
    SB: { min_eff_stack: 6, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 10 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 12 },
    LJ: { min_eff_stack: 0, max_eff_stack: 13 },
    HJ: { min_eff_stack: 0, max_eff_stack: 14 },
    CO: { min_eff_stack: 0, max_eff_stack: 15 },
    BTN: { min_eff_stack: 0, max_eff_stack: 19 },
    SB: { min_eff_stack: 0, max_eff_stack: 7 },
    BB: null,
  },
};
