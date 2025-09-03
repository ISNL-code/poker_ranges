export const T8o_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: null,
    BTN: { min_eff_stack: 17, max_eff_stack: Infinity },
    SB: { min_eff_stack: 14, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: { min_eff_stack: 0, max_eff_stack: 2 },
    CO: { min_eff_stack: 0, max_eff_stack: 2 },
    BTN: { min_eff_stack: 0, max_eff_stack: 4 },
    SB: { min_eff_stack: 0, max_eff_stack: 12 },
    BB: null,
  },
};
