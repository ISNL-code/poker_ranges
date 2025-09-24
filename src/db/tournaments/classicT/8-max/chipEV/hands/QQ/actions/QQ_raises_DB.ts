// actions/QQ_raises_DB.ts
export const QQ_raises = {
  open_raise: {
    UTG: { min_eff_stack: 6, max_eff_stack: Infinity },
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
    UTG1: { min_eff_stack: 0, max_eff_stack: 10 },
    LJ: { min_eff_stack: 0, max_eff_stack: 10 },
    HJ: { min_eff_stack: 0, max_eff_stack: 10 },
    CO: { min_eff_stack: 0, max_eff_stack: 9 },
    BTN: { min_eff_stack: 0, max_eff_stack: 9 },
    SB: { min_eff_stack: 0, max_eff_stack: 6 },
    BB: null,
  },
};
