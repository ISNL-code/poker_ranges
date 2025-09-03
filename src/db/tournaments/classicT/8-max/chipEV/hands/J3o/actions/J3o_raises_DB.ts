// actions/J3o_raises_DB.ts
export const J3o_raises = {
  open_raise: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: null,
    BTN: null,
    SB: null,
    BB: null,
  },
  open_push: {
    UTG: null,
    UTG1: null,
    LJ: null,
    HJ: null,
    CO: null,
    BTN: null,
    SB: { min_eff_stack: 0, max_eff_stack: 7 },
    BB: null,
  },
};
