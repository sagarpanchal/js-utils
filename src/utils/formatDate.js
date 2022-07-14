import { LUXON_FORMAT } from "constants/Common";
import { formatDateTime } from "./formatDateTime";

export function formatDate(isoDateTime, format = LUXON_FORMAT.DATE) {
  return formatDateTime(isoDateTime, format);
}
