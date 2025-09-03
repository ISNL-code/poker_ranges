// actions/QTo_raises_DB.ts
export const QTo_raises = {
  open_raise: {
    UTG: null,
    UTG1: { min_eff_stack: 100, max_eff_stack: Infinity },
    LJ: { min_eff_stack: 14, max_eff_stack: Infinity },
    HJ: { min_eff_stack: 17, max_eff_stack: Infinity },
    CO: { min_eff_stack: 12, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 14, max_eff_stack: Infinity },
    SB: { min_eff_stack: 20, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 5 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 5 },
    LJ: { min_eff_stack: 0, max_eff_stack: 7 },
    HJ: { min_eff_stack: 0, max_eff_stack: 8 },
    CO: { min_eff_stack: 0, max_eff_stack: 12 },
    BTN: { min_eff_stack: 0, max_eff_stack: 14 },
    SB: { min_eff_stack: 0, max_eff_stack: 14 },
    BB: null,
  },
};
