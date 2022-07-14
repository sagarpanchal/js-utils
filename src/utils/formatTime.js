import { LUXON_FORMAT } from "constants/Common";
import { formatDateTime } from "./formatDateTime";

export function formatTime(isoDateTime, format = LUXON_FORMAT.TIME) {
  return formatDateTime(isoDateTime, format);
}
