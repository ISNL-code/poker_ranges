// actions/J8s_raises_DB.ts
export const J8s_raises = {
  open_raise: {
    UTG: null,
    UTG1: { min_eff_stack: 25, max_eff_stack: Infinity },
    LJ: { min_eff_stack: 17, max_eff_stack: Infinity },
    HJ: { min_eff_stack: 17, max_eff_stack: Infinity },
    CO: { min_eff_stack: 15, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 14, max_eff_stack: Infinity },
    SB: { min_eff_stack: 8, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 3 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 12 },
    LJ: { min_eff_stack: 0, max_eff_stack: 12 },
    HJ: { min_eff_stack: 0, max_eff_stack: 14 },
    CO: { min_eff_stack: 0, max_eff_stack: 12 },
    BTN: { min_eff_stack: 0, max_eff_stack: 17 },
    SB: { min_eff_stack: 0, max_eff_stack: 12 },
    BB: null,
  },
};
