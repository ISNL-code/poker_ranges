// actions/J5o_raises_DB.ts
export const J5o_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: null,
    BTN: null,
    SB: { min_eff_stack: 10, max_eff_stack: Infinity },
    BB: null,
  },
  open_push: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: null,
    BTN: null,
    SB: { min_eff_stack: 0, max_eff_stack: 9 },
    BB: null,
  },
};
