import { parseISO, format } from "date-fns";

export default function Date({ dateString, template = "LLLL io, yyyy" }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, template)}</time>;
}
