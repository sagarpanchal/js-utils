export const LOCALE = window?.LOCALE ?? "en-US";
export const CURRENCY = window?.CURRENCY ?? "USD";
export const TIMEZONE_IANA = window?.TIMEZONE_IANA ?? "Asia/Kolkata";
export const FRACTION_LENGTH = window?.FRACTION_LENGTH ?? 2;

export const LUXON_FORMAT = window?.LUXON_FORMAT ?? {
  DATE: "dd/LL/y",
  TIME: "hh:mm a",
  DATE_TIME: "dd/LL/y hh:mm a",
  DURATION: "hh:mm:ss",
};

export const REGEX = window?.REGEX ?? {
  NUMERIC: {
    STRICT: /^[+-]?[\d]+[.]?[\d]*$/gm,
    LOOSE: /^[+-]?[\d]*[.]?[\d]*$/gm,
  },
  ALPHA_NUMERIC: {
    STRICT: /^(?=.*[a-zA-Z]{1,})(?=.*[\d]{1,})[a-zA-Z0-9]+$/gm,
    LOOSE: /^[-0-9a-zA-Z]*$/gm,
  },
};
