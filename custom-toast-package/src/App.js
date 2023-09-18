import React, { useState } from "react";
import Toast from "./components/Toast";

const App = () => {
  const [data, setData] = useState({
    message: "",
    checked: false,
    duration: null,
    position: "bottom-right",
  });

  // for toasts list
  const [toastList, setToastList] = useState({
    "bottom-right": [],
    "bottom-left": [],
    "top-right": [],
    "top-left": [],
    "top-center": [],
  });

  // function to handle the input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...data };
    newData[name] = value;
    setData({ ...newData });
  };

  return (
    <div className="flex items-center justify-center h-screen font-semibold bg-gray-50">
      {/* container for toast card options */}
      <div className="p-5 space-y-5 text-teal-600 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-center ">
          Custom React Toast Package
        </h1>

        {/* for auto dismiss and duration */}
        <header className="grid grid-cols-2 gap-5">
          {/* for auto dismiss */}
          <div className="flex items-center self-start gap-2">
            <input
              type="checkbox"
              id="checked"
              name="checked"
              className="cursor-pointer"
              checked={data?.checked}
              onChange={() => {
                setData({ ...data, checked: !data?.checked });
              }}
            />
            <label htmlFor="checked" className="mb-1 cursor-pointer">
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
              disabled={!data?.checked}
              defaultValue={!data?.checked ? 5 : null}
              className=" border-[1.5px] border-teal-600 outline-none p-1 rounded-md"
              onChange={(event) => handleChange(event)}
            />
          </div>
        </header>

        {/* for position and message */}
        <main className="grid grid-cols-2 gap-5">
          {/* for message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Toast message</label>
            <input
              name="message"
              type="text"
              placeholder="Data fetched"
              value={data?.message}
              onChange={(event) => handleChange(event)}
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
              onChange={(event) => handleChange(event)}
            >
              <option value="bottom-right">Bottom Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="top-left">Top Left</option>
              <option value="top-right">Top Right</option>
              <option value="top-center">Top Center</option>
            </select>
          </div>
        </main>

        {/* for footer */}
        <footer className="grid grid-cols-2 gap-x-5 gap-y-2">
          {/* success button */}
          <button
            className="py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700"
            onClick={() => {
              const newData = { ...toastList };
              newData[data?.position].push({
                position: data?.position,
                message: data?.message
                  ? data?.message
                  : "Data fetched successfully",
                duration: data?.checked
                  ? data?.duration
                    ? data?.duration
                    : 5
                  : null,
                type: "success",
              });
              setToastList({ ...newData });
            }}
          >
            Success Toast
          </button>

          {/* error button */}
          <button
            className="py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700"
            onClick={() => {
              const newData = { ...toastList };
              newData[data?.position].push({
                position: data?.position,
                message: data?.message ? data?.message : "Invalid details",
                duration: data?.checked
                  ? data?.duration
                    ? data?.duration
                    : 5
                  : null,
                type: "error",
              });
              setToastList({ ...newData });
            }}
          >
            Error Toast
          </button>

          {/* warning button */}
          <button
            className="py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700"
            onClick={() => {
              const newData = { ...toastList };
              newData[data?.position].push({
                position: data?.position,
                message: data?.message
                  ? data?.message
                  : "All fields are mandatory",
                duration: data?.checked
                  ? data?.duration
                    ? data?.duration
                    : 5
                  : null,
                type: "warn",
              });
              setToastList({ ...newData });
            }}
          >
            Warning Toast
          </button>

          {/* clear all button */}
          <button
            className="py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700"
            onClick={() =>
              setToastList({
                "bottom-right": [],
                "bottom-left": [],
                "top-right": [],
                "top-left": [],
                "top-center": [],
              })
            }
          >
            Clear All Toast
          </button>
        </footer>
      </div>
      <Toast toastList={toastList} setToastList={setToastList} />
    </div>
  );
};

export default App;
