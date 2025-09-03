export const A2o_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: null,
    BTN: { min_eff_stack: 15, max_eff_stack: Infinity },
    SB: { min_eff_stack: 19, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: null,
    UTG1: null,
    LJ: { min_eff_stack: 0, max_eff_stack: 6 },
    HJ: { min_eff_stack: 0, max_eff_stack: 8 },
    CO: { min_eff_stack: 0, max_eff_stack: 10 },
    BTN: { min_eff_stack: 0, max_eff_stack: 15 },
    SB: { min_eff_stack: 0, max_eff_stack: 25 },
    BB: null,
  },
};
