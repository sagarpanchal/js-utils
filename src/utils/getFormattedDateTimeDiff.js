import { LUXON_FORMAT } from "constants/Common";
import { formatDuration } from "./formatDuration";
import { getDateTimeDiff } from "./getDateTimeDiff";

export function getFormattedDateTimeDiff(startISO, endISO, format = LUXON_FORMAT.DURATION) {
  return formatDuration(getDateTimeDiff(startISO, endISO), format);
}
