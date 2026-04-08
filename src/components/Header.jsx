const Header = ({ currentMonth, setCurrentMonth }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <button
        onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        ←
      </button>

      <h2 className="font-bold text-lg">
        {currentMonth.format("MMMM YYYY")}
      </h2>

      <button
        onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        →
      </button>
    </div>
  );
};

export default Header;