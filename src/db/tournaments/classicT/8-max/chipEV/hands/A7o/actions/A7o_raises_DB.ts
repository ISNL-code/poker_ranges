export const A7o_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: { min_eff_stack: 16, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 20, max_eff_stack: Infinity },
    SB: { min_eff_stack: 20, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 6 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 8 },
    LJ: { min_eff_stack: 0, max_eff_stack: 10 },
    HJ: { min_eff_stack: 0, max_eff_stack: 13 },
    CO: { min_eff_stack: 0, max_eff_stack: 15 },
    BTN: { min_eff_stack: 0, max_eff_stack: 20 },
    SB: { min_eff_stack: 0, max_eff_stack: 25 },
    BB: null,
  },
};
