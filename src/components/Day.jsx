import dayjs from "dayjs";

const Day = ({ day, startDate, endDate, onClick }) => {
  const isStart = startDate && day.isSame(startDate, "day");
  const isEnd = endDate && day.isSame(endDate, "day");

  const isInRange =
    startDate &&
    endDate &&
    day.isAfter(startDate) &&
    day.isBefore(endDate);

  const isToday = day.isSame(dayjs(), "day");
  const isSunday = day.format("ddd") === "Sun";

  return (
    <div
      onClick={() => onClick(day)}
      className={`
        p-1 rounded cursor-pointer text-center text-xs
        transition-all duration-200 ease-in-out

        ${isStart || isEnd ? "bg-blue-600 text-white" : ""}
        ${isInRange ? "bg-blue-200" : ""}
        ${isToday ? "border-2 border-green-500" : ""}
        ${isSunday ? "text-red-500 font-bold" : ""}

        /* ✅ Hover ALWAYS visible */
        hover:scale-105 hover:shadow-sm
        hover:bg-blue-300
      `}
    >
      {day.date()}
    </div>
  );
};

export default Day;