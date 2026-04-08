import { useState } from "react";
import dayjs from "dayjs";
import { getMonthDays } from "../utils/calendar";
import Day from "./Day";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const days = getMonthDays(currentMonth);

  const handleClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else {
      if (day.isBefore(startDate)) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">

      {/* CARD */}
      <div className="
  w-[320px] bg-white rounded-xl overflow-hidden
  shadow-xl
  transition-all duration-300 ease-in-out
  hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl
">

        {/* IMAGE */}
        <div
          className="h-52 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
          }}
        >
          <div className="absolute bottom-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-tl-xl">
            {currentMonth.format("YYYY")}
            <br />
            <span className="font-bold">
              {currentMonth.format("MMMM")}
            </span>
          </div>
        </div>

        {/* 🔥 MONTH SWITCH (ADD THIS) */}
<div className="flex justify-between items-center px-4 pt-3 text-sm">
  <button
    onClick={() =>
      setCurrentMonth(currentMonth.subtract(1, "month"))
    }
    className="px-2 py-1 rounded hover:bg-gray-200"
  >
    ◀
  </button>

  <span className="font-semibold">
    {currentMonth.format("MMMM YYYY")}
  </span>

  <button
    onClick={() =>
      setCurrentMonth(currentMonth.add(1, "month"))
    }
    className="px-2 py-1 rounded hover:bg-gray-200"
  >
    ▶
  </button>
</div>
        
        
        {/* CONTENT */}
        <div className="p-4 flex flex-col-reverse md:flex-row gap-3">

          {/* NOTES */}
          <div className="w-1/3 text-xs">
            <h3 className="font-semibold mb-2">Notes</h3>
            <textarea className="w-full h-24 border p-1 rounded" />
          </div>

          {/* CALENDAR */}
          <div className="w-2/3">

            {/* DAYS */}
            <div className="grid grid-cols-7 text-[10px] text-center mb-1">
              {["S","M","T","W","TH","F","S"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* DATES */}
            <div className="grid grid-cols-7 gap-1 text-xs">
              {days.map((day, i) => (
                <Day
                  key={i}
                  day={day}
                  startDate={startDate}
                  endDate={endDate}
                  onClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
