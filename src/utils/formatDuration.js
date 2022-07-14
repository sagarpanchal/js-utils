import { Duration } from "luxon";
import { LUXON_FORMAT } from "constants/Common";

export function formatDuration(duration, format = LUXON_FORMAT.DURATION) {
  return Duration.isDuration(duration) && duration?.isValid ? duration.toFormat(format) : undefined;
}
