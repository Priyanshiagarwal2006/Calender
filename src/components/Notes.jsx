import { useState, useEffect } from "react";

const Notes = () => {
  const [note, setNote] = useState(
    localStorage.getItem("calendar-note") || ""
  );

  useEffect(() => {
    localStorage.setItem("calendar-note", note);
  }, [note]);

  return (
    <div className="w-full md:w-1/3 bg-gray-50 p-3 rounded-lg shadow">
      <h3 className="font-semibold mb-2">Notes</h3>
      <textarea
        className="w-full h-40 p-2 border rounded outline-none"
        placeholder="Write your notes..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
};

export default Notes;