// actions/JTs_raises_DB.ts
export const JTs_raises = {
  open_raise: {
    UTG: { min_eff_stack: 16, max_eff_stack: Infinity },
    UTG1: { min_eff_stack: 16, max_eff_stack: Infinity },
    LJ: { min_eff_stack: 17, max_eff_stack: Infinity },
    HJ: { min_eff_stack: 19, max_eff_stack: Infinity },
    CO: { min_eff_stack: 19, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 22, max_eff_stack: Infinity },
    SB: { min_eff_stack: 8, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 16 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 15 },
    LJ: { min_eff_stack: 0, max_eff_stack: 17 },
    HJ: { min_eff_stack: 0, max_eff_stack: 18 },
    CO: { min_eff_stack: 0, max_eff_stack: 18 },
    BTN: { min_eff_stack: 0, max_eff_stack: 23 },
    SB: { min_eff_stack: 0, max_eff_stack: 7 },
    BB: null,
  },
};
