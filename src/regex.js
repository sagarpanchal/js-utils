export const NUMERIC = {
  STRICT: /^[+-]?[\d]+[.]?[\d]*$/gm,
  LOOSE: /^[+-]?[\d]*[.]?[\d]*$/gm,
};

export const ALPHA_NUMERIC = {
  STRICT: /^(?=.*[a-zA-Z]{1,})(?=.*[\d]{1,})[a-zA-Z0-9]+$/gm,
  LOOSE: /^[-0-9a-zA-Z]*$/gm,
};
