import { DateTime } from "luxon";
import { TIMEZONE_IANA } from "constants/Common";

export function getCurrentTime() {
  return DateTime.local().setZone(TIMEZONE_IANA);
}
