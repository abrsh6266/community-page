export function getRelativeTime(inputDate: Date | string | number): string {
  const date = new Date(inputDate);
  const now = new Date();
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const secondsElapsed = (date.getTime() - now.getTime()) / 1000;
  const minutesElapsed = secondsElapsed / 60;
  const hoursElapsed = minutesElapsed / 60;
  const daysElapsed = hoursElapsed / 24;
  const weeksElapsed = daysElapsed / 7;
  const monthsElapsed = daysElapsed / 30;
  const yearsElapsed = daysElapsed / 365;

  if (Math.abs(secondsElapsed) < 60) {
    return formatter.format(Math.round(secondsElapsed), "second");
  } else if (Math.abs(minutesElapsed) < 60) {
    return formatter.format(Math.round(minutesElapsed), "minute");
  } else if (Math.abs(hoursElapsed) < 24) {
    return formatter.format(Math.round(hoursElapsed), "hour");
  } else if (Math.abs(daysElapsed) < 7) {
    return formatter.format(Math.round(daysElapsed), "day");
  } else if (Math.abs(weeksElapsed) < 4) {
    return formatter.format(Math.round(weeksElapsed), "week");
  } else if (Math.abs(monthsElapsed) < 12) {
    return formatter.format(Math.round(monthsElapsed), "month");
  } else {
    return formatter.format(Math.round(yearsElapsed), "year");
  }
}
