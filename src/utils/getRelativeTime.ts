import dayjs, { Dayjs } from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(RelativeTime);

const getRelativeTime = (date: Dayjs) => date.fromNow();

export { getRelativeTime };
