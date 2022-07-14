import { DateTime } from "luxon";

export function getDateTimeDiff(startISO, endISO) {
  return DateTime.fromISO(endISO).diff(DateTime.fromISO(startISO));
}
