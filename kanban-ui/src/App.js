import React, { useContext } from "react";
import { ContextData } from ".";

const App = () => {
  const { theme, label, assignee, board } = useContext(ContextData);

  return (
    <div className="flex">
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
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay" />
          <div className="flex flex-col justify-between min-h-full p-4 border-r-2 border-gray-100 bg-base-100 lg:bg-none menu w-60 text-base-content">
            {/* for heading and board list */}
            <div className="space-y-5">
              <h1 className="text-2xl font-bold text-center text-accent">
                Kanban UI Board
              </h1>
              {/* displaying all the boards */}
              <ul className="space-y-2">
                {board &&
                  board?.map((item) => {
                    return (
                      <li
                        key={item?.id}
                        className="flex items-start text-base font-semibold rounded-md cursor-pointer"
                      >
                        <p className="w-full hover:text-accent">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
      <main className="w-full ">
        {/* for header */}
        <header>
          {/* add new todo */}
          <button type="button">Add new todo</button>

          {/* dark and light mode switch */}
          {theme === "light" ? (
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </button>
          ) : (
            <button>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
          )}
        </header>

        {/* todo container */}
        <div>
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <p>Todo</p>
          </h2>
          {/* for todo list */}
          <ul>
            <li draggable="true">todo 1</li>
            <li draggable="true">todo 2</li>
            <li draggable="true">todo 3</li>
          </ul>
        </div>

        {/* in progress container */}
        <div>
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
              />
            </svg>
            <p>In Progress</p>
          </h2>
          {/* for todo list */}
          <ul>
            <li draggable="true">todo 1</li>
            <li draggable="true">todo 2</li>
            <li draggable="true">todo 3</li>
          </ul>
        </div>

        {/* for review container */}
        <div>
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <p>Review</p>
          </h2>
          {/* for todo list */}
          <ul>
            <li draggable="true">todo 1</li>
            <li draggable="true">todo 2</li>
            <li draggable="true">todo 3</li>
          </ul>
        </div>

        {/* completed container */}
        <div>
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
              />
            </svg>
            <p>Done</p>
          </h2>
          {/* for todo list */}
          <ul>
            <li draggable="true">todo 1</li>
            <li draggable="true">todo 2</li>
            <li draggable="true">todo 3</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
