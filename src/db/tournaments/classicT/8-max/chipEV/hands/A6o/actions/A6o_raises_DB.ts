export const A6o_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: { min_eff_stack: 7, max_eff_stack: 50 },
    BTN: { min_eff_stack: 7, max_eff_stack: Infinity },
    SB: { min_eff_stack: 7, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 5 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 6 },
    LJ: { min_eff_stack: 0, max_eff_stack: 8 },
    HJ: { min_eff_stack: 0, max_eff_stack: 10 },
    CO: { min_eff_stack: 0, max_eff_stack: 14 },
    BTN: { min_eff_stack: 0, max_eff_stack: 19 },
    SB: { min_eff_stack: 0, max_eff_stack: 25 },
    BB: null,
  },
};
