export const A2s_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: { min_eff_stack: 7, max_eff_stack: Infinity },
    HJ: { min_eff_stack: 7, max_eff_stack: Infinity },
    CO: { min_eff_stack: 7, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 7, max_eff_stack: Infinity },
    SB: { min_eff_stack: 7, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 8 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 9 },
    LJ: { min_eff_stack: 0, max_eff_stack: 11 },
    HJ: { min_eff_stack: 0, max_eff_stack: 13 },
    CO: { min_eff_stack: 0, max_eff_stack: 15 },
    BTN: { min_eff_stack: 0, max_eff_stack: 22 },
    SB: { min_eff_stack: 0, max_eff_stack: 15 },
    BB: null,
  },
};
