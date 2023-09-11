import React from "react";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center font-semibold bg-gray-50">
      {/* container for toast card options */}
      <div className="shadow-md rounded-md p-5 space-y-5 text-teal-600">
        <h1 className="text-center font-bold text-2xl ">
          Custom React Toast Package
        </h1>

        {/* for auto dismiss and duration */}
        <header className="grid grid-cols-2 gap-5">
          {/* for auto dismiss */}
          <div className="flex items-center gap-2 self-start">
            <input
              type="checkbox"
              id="auto-dismiss"
              name="auto-dismiss"
              className="cursor-pointer"
            />
            <label htmlFor="auto-dismiss" className="mb-1 cursor-pointer">
              Auto-dismiss
            </label>
          </div>

          {/* for duration */}
          <div className="flex flex-col gap-2 mb-1">
            <label htmlFor="duration">Duration (in second)</label>
            <input
              type="number"
              placeholder="5"
              id="duration"
              name="duration"
              defaultValue={5}
              className=" border-[1.5px] border-teal-600 outline-none p-1 rounded-md"
            />
          </div>
        </header>

        {/* for position and message */}
        <main className="grid grid-cols-2 gap-5">
          {/* for message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Toast message</label>
            <input
              type="text"
              placeholder="Data fetched"
              className="border-[1.5px] border-teal-600 outline-none p-1 rounded-md"
            />
          </div>

          {/* for position */}
          <div className="flex flex-col gap-1">
            <label htmlFor="position">Toast Position</label>
            <select
              name="position"
              id="position"
              className="border-[1.5px] border-teal-600 outline-none p-1 rounded-md"
            >
              <option value="bottom-right">Bottom Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="top-left">Top Left</option>
              <option value="top-right">Top Right</option>
              <option value="top-Center">Top Center</option>
            </select>
          </div>
        </main>

        {/* for footer */}
        <footer className="grid grid-cols-2 gap-5">
          <button className="py-2 bg-teal-600 text-white rounded-md">
            Success Toast
          </button>
          <button className="py-2 bg-teal-600 text-white rounded-md">
            Error Toast
          </button>
          <button className="py-2 bg-teal-600 text-white rounded-md">
            Warning Toast
          </button>
          <button className="py-2 bg-teal-600 text-white rounded-md">
            Clear All Toast
          </button>
        </footer>
      </div>
    </div>
  );
};

export default App;
