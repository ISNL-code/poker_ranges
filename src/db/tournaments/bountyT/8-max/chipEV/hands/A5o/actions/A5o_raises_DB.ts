export const A5o_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: null,
    BTN: { min_eff_stack: 20, max_eff_stack: Infinity },
    SB: { min_eff_stack: 20, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 6 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 7 },
    LJ: { min_eff_stack: 0, max_eff_stack: 9 },
    HJ: { min_eff_stack: 0, max_eff_stack: 10 },
    CO: { min_eff_stack: 0, max_eff_stack: 14 },
    BTN: { min_eff_stack: 0, max_eff_stack: 20 },
    SB: { min_eff_stack: 0, max_eff_stack: 20 },
    BB: null,
  },
};
