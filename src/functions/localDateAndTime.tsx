import { format, parse } from "date-fns";

function localDateAndTime(timestamp: string) {
  const date = new Date(timestamp);
  const dateStr = format(date, "MM/dd/yyyy");

  const parsedDate = parse(dateStr, "MM/dd/yyyy", new Date());

  const month = format(parsedDate, "MMMM");
  const date_ = format(parsedDate, "dd");
  const year = format(parsedDate, "yyyy");
  const day = format(parsedDate, "EEEE");

  return `${day}, ${month} ${date_}, ${year} ${date.toLocaleTimeString().replace(/:\d{2}\s/, " ")}`;
}

export default localDateAndTime;