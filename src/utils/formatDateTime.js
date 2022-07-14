import { DateTime } from "luxon";
import { LUXON_FORMAT } from "constants/Common";

export function formatDateTime(isoDateTime, format = LUXON_FORMAT.DATE_TIME) {
  const dateTime = DateTime.fromISO(isoDateTime);
  return dateTime.isValid ? dateTime.toFormat(format) : undefined;
}
