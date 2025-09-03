// actions/KQo_raises_DB.ts
export const KQo_raises = {
  open_raise: {
    UTG: { min_eff_stack: 12, max_eff_stack: Infinity },
    UTG1: { min_eff_stack: 14, max_eff_stack: Infinity },
    LJ: { min_eff_stack: 16, max_eff_stack: Infinity },
    HJ: { min_eff_stack: 17, max_eff_stack: Infinity },
    CO: { min_eff_stack: 16, max_eff_stack: Infinity },
    BTN: { min_eff_stack: 18, max_eff_stack: Infinity },
    SB: { min_eff_stack: 12, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: { min_eff_stack: 0, max_eff_stack: 12 },
    UTG1: { min_eff_stack: 0, max_eff_stack: 14 },
    LJ: { min_eff_stack: 0, max_eff_stack: 16 },
    HJ: { min_eff_stack: 0, max_eff_stack: 17 },
    CO: { min_eff_stack: 0, max_eff_stack: 17 },
    BTN: { min_eff_stack: 0, max_eff_stack: 19 },
    SB: { min_eff_stack: 0, max_eff_stack: 12 },
    BB: null,
  },
};
