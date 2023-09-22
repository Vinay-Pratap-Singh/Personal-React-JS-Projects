import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Data from "./Database/Data";

const App = () => {
  const { themes, label, assignee, boards: myboards } = Data;
  const [boards, setBoards] = useState([...myboards]);
  const [currentBoard, setCurrentBoard] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || themes[0]
  );

  const handleDragStart = (e, item, targetColumn) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
    e.dataTransfer.setData("targetColumn", JSON.stringify(targetColumn));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("item"));
    const originColumn = JSON.parse(e.dataTransfer.getData("targetColumn"));
    if (targetColumn === "todos") {
      Data.boards[currentBoard].todos = [
        ...Data?.boards[currentBoard]?.todos,
        item,
      ];
    } else if (targetColumn === "progress") {
      Data.boards[currentBoard].progress = [
        ...Data?.boards[currentBoard]?.progress,
        item,
      ];
    } else if (targetColumn === "review") {
      Data.boards[currentBoard].review = [
        ...Data?.boards[currentBoard]?.review,
        item,
      ];
    } else if (targetColumn === "done") {
      Data.boards[currentBoard].done = [
        ...Data?.boards[currentBoard]?.done,
        item,
      ];
    }
    // deleting the item from originated targeted column
    Data.boards[currentBoard][originColumn] = Data.boards[currentBoard][
      originColumn
    ]?.filter((todo) => {
      return todo?.id !== item?.id;
    });
    setBoards([...myboards]);
  };

  return (
    <div className="flex" data-theme={currentTheme}>
      {/* sidebar */}
      <div className="drawer lg:drawer-open w-fit">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="fixed flex flex-col items-center self-start justify-center drawer-content top-3 left-3">
          {/* button for drawer toggle in smaller screen */}
          <label
            htmlFor="my-drawer-2"
            className="text-white btn btn-accent drawer-button btn-sm lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </label>
        </div>
        <div className="z-50 drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay" />
          <div className="flex flex-col justify-between min-h-full p-4 border-r-2 border-gray-100 bg-base-100 lg:bg-none menu w-60 text-base-content">
            {/* for heading and board list */}
            <div className="space-y-5">
              <h1 className="text-2xl font-bold text-center text-accent">
                Kanban UI Board
              </h1>
              {/* displaying all the boards */}
              <ul className="space-y-2">
                {boards &&
                  boards?.map((item, index) => {
                    return (
                      <li
                        key={item?.id}
                        className="flex items-start text-base font-semibold rounded-md cursor-pointer"
                        onClick={() => setCurrentBoard(index)}
                      >
                        <p
                          className={`w-full hover:text-accent ${
                            currentBoard === index && "text-accent bg-gray-200"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                            />
                          </svg>{" "}
                          <span>{item?.name}</span>
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>

            {/* button to add new board */}
            <button
              type="button"
              className="py-2 font-bold text-white btn btn-md btn-accent"
            >
              Add new board
            </button>
          </div>
        </div>
      </div>

      {/* kanban container */}
      <main className="container flex flex-col gap-5 p-5">
        {/* for header */}
        <header className="flex items-center self-end space-x-5">
          {/* add new todo */}
          <button
            type="button"
            className="font-bold text-white btn btn-md btn-accent"
          >
            Add new todo
          </button>

          {/* for changing the theme */}
          <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <label tabIndex={0} className="m-1 font-bold btn text-accent">
              Theme{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 overflow-y-scroll h-60 flex-nowrap"
            >
              {themes?.map((theme) => {
                return (
                  <li
                    key={uuid()}
                    onClick={() => {
                      setCurrentTheme(theme);
                      localStorage.setItem("theme", theme);
                    }}
                  >
                    <a
                      href="#"
                      className={`hover:text-accent hover:font-semibold ${
                        currentTheme === theme &&
                        "bg-gray-200 font-semibold text-accent"
                      }`}
                    >
                      {theme}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </header>

        {/* body container */}
        <div className="flex items-start justify-between gap-5">
          {/* columns container */}
          <div className="flex-1 p-4 space-y-2 rounded-md shadow-sm">
            <h2 className="flex items-center justify-center gap-1 text-lg font-bold text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <p>Todo</p>
            </h2>
            {/* for todos list */}
            <ul
              className="flex flex-col gap-2"
              id="todo"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "todos")}
            >
              {boards[currentBoard]?.todos?.map((todo) => {
                return (
                  <li
                    key={todo?.id}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, todo, "todos")}
                    className="p-2 text-teal-500 rounded-md shadow-sm cursor-move item"
                  >
                    <span
                      style={{ backgroundColor: todo?.label?.colorCode }}
                      className="px-2 py-1 text-xs font-semibold text-white rounded-md w-fit"
                    >
                      {todo?.label?.name}
                    </span>
                    <div className="my-2 font-medium">
                      <h5>{todo?.title}</h5>
                      <p className="text-sm">{todo?.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold"> {todo?.date}</p>
                      <div
                        className="tooltip tooltip-accent"
                        data-tip={todo?.assignee?.name}
                      >
                        <img
                          src={todo?.assignee?.avatar}
                          alt="user profile"
                          className="rounded-full w-7 h-7"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* in progress container */}
          <div className="flex-1 p-4 space-y-2 rounded-md shadow-sm">
            <h2 className="flex items-center justify-center gap-1 text-lg font-bold text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
              <p>In Progress</p>
            </h2>
            {/* for todo list */}
            <ul
              className="flex flex-col gap-2"
              id="progress"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "progress")}
            >
              {boards[currentBoard]?.progress?.map((todo) => {
                return (
                  <li
                    key={todo?.id}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, todo, "progress")}
                    className="p-2 text-teal-500 rounded-md shadow-sm cursor-move item"
                  >
                    <span
                      style={{ backgroundColor: todo?.label?.colorCode }}
                      className="px-2 py-1 text-xs font-semibold text-white rounded-md w-fit"
                    >
                      {todo?.label?.name}
                    </span>
                    <div className="my-2 font-medium">
                      <h5>{todo?.title}</h5>
                      <p className="text-sm">{todo?.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold"> {todo?.date}</p>
                      <div
                        className="tooltip tooltip-accent"
                        data-tip={todo?.assignee?.name}
                      >
                        <img
                          src={todo?.assignee?.avatar}
                          alt="user profile"
                          className="rounded-full w-7 h-7"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* for review container */}
          <div className="flex-1 p-4 space-y-2 rounded-md shadow-sm ">
            <h2 className="flex items-center justify-center gap-1 text-lg font-bold text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              <p>Review</p>
            </h2>
            {/* for todo list */}
            <ul
              className="flex flex-col gap-2"
              id="review"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "review")}
            >
              {boards[currentBoard]?.review?.map((todo) => {
                return (
                  <li
                    key={todo?.id}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, todo, "review")}
                    className="p-2 text-teal-500 rounded-md shadow-sm cursor-move item"
                  >
                    <span
                      style={{ backgroundColor: todo?.label?.colorCode }}
                      className="px-2 py-1 text-xs font-semibold text-white rounded-md w-fit"
                    >
                      {todo?.label?.name}
                    </span>
                    <div className="my-2 font-medium">
                      <h5>{todo?.title}</h5>
                      <p className="text-sm">{todo?.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold"> {todo?.date}</p>
                      <div
                        className="tooltip tooltip-accent"
                        data-tip={todo?.assignee?.name}
                      >
                        <img
                          src={todo?.assignee?.avatar}
                          alt="user profile"
                          className="rounded-full w-7 h-7"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* completed container */}
          <div className="flex-1 p-4 space-y-2 rounded-md shadow-sm ">
            <h2 className="flex items-center justify-center gap-1 text-lg font-bold text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                />
              </svg>
              <p>Done</p>
            </h2>
            {/* for todo list */}
            <ul
              className="flex flex-col gap-2"
              id="completed"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "done")}
            >
              {boards[0]?.done?.map((todo) => {
                return (
                  <li
                    key={todo?.id}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, todo, "done")}
                    className="p-2 text-teal-500 rounded-md shadow-sm cursor-move item"
                  >
                    <span
                      style={{ backgroundColor: todo?.label?.colorCode }}
                      className="px-2 py-1 text-xs font-semibold text-white rounded-md w-fit"
                    >
                      {todo?.label?.name}
                    </span>
                    <div className="my-2 font-medium">
                      <h5>{todo?.title}</h5>
                      <p className="text-sm">{todo?.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold"> {todo?.date}</p>
                      <div
                        className="tooltip tooltip-accent"
                        data-tip={todo?.assignee?.name}
                      >
                        <img
                          src={todo?.assignee?.avatar}
                          alt="user profile"
                          className="rounded-full w-7 h-7"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
