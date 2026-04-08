export const getMonthDays = (month) => {
  const start = month.startOf("month").startOf("week");
  const end = month.endOf("month").endOf("week");

  const days = [];
  let current = start;

  while (current.isBefore(end)) {
    days.push(current);
    current = current.add(1, "day");
  }

  return days;
};