"use client";

import { useState } from "react";
import Navbarall from "../components/Navberall";

export default function Messages() {
  const [messages] = useState([
    {
      title: "Hi Ankit, Welcome to Social Stratix",
      date: "11/06/2024",
      time: "2:00 PM",
      content:
        "Hi Ankit, 👋 Welcome to Social Stratix a place where you can find the best work, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Hi Ankit, Welcome to Social Stratix",
      date: "11/06/2024",
      time: "2:00 PM",
      content:
        "Ibore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    
    
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50">
      <Navbarall />

      <div className="flex px-6 py-6 max-w-7xl mx-auto rounded-lg shadow bg-white mt-5 ">
        {/* Sidebar */}
        <aside className="w-80 rounded-t-lg shadow overflow-hidden">
          <div className="bg-white p-4">
            <h2 className="text-xl font-semibold mb-4">Messages</h2>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full h-full border border-gray-300 rounded-md pl-10 pr-2 py-2 text-sm"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-2.5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z"
                />
              </svg>
            </div>
          </div>
          <div className="bg-gray-200 px-4 pt-2 pb-4 overflow-y-auto max-h-[calc(100vh-220px)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-3 mb-2 rounded-lg cursor-pointer ${i === 0 ? "bg-[#d6c8e8]" : "bg-white"}`}
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#4C2C69] text-white">
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
                      d="M17.25 6.75A4.5 4.5 0 0112 11.25a4.5 4.5 0 01-5.25-4.5m10.5 0A4.5 4.5 0 0012 2.25a4.5 4.5 0 00-5.25 4.5m10.5 0v.75a6.75 6.75 0 11-13.5 0v-.75m13.5 0h1.125c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 012.25 10.125v-2.25c0-.621.504-1.125 1.125-1.125H4.5"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-[#1E1B39] leading-tight">Social Stratix</p>
                  <p className="text-xs text-gray-500 truncate w-[170px]">{msg.title}</p>
                </div>
                <div className="text-[10px] text-gray-500 whitespace-nowrap">
                  {i === 1 ? (
                    <>
                      <span className="text-[11px] text-[#E6A300] font-bold block leading-none text-right">11:05 AM</span>
                      <span className="text-white bg-[#E6A300] rounded-full px-[6px] py-[2px] text-[10px] ml-auto block mt-1 w-fit">
                        1
                      </span>
                    </>
                  ) : i === 2 ? "Yesterday" : i === 3 ? "Saturday" : msg.date}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main chat */}
        <main className="flex-1 bg-white ml-4 rounded-lg shadow p-4 flex flex-col">
          <h2 className="text-lg font-medium mb-2">Social Stratix</h2>
          <p className="text-xs text-center text-gray-400 mb-4">11/06/2024</p>

          <div className="flex flex-col gap-3 flex-grow overflow-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-md text-sm text-gray-700 shadow-sm max-w-[80%] ${
                  i % 2 === 0 ? "bg-gray-100" : "bg-purple-100/40 self-end"
                }`}
              >
                <p className="whitespace-pre-line">{msg.content}</p>
                <p className="text-[10px] text-right text-gray-400 mt-1">{msg.time}</p>
              </div>
            ))}
            <div className="bg-purple-100/40 w-6 h-6 flex items-center justify-center rounded-md">
              <span className="w-2 h-2 bg-purple-800 rounded-full block"></span>
            </div>
          </div>

          {/* Message input */}
          <div className="mt-4 flex items-center gap-2 border-t border-gray-200 pt-2">
            <input
              type="text"
              placeholder="Write a message"
              className="flex-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm"
            />
            <button className="bg-[rgba(120,60,145,1)] text-white text-sm px-4 py-1.5 rounded-md">
              SEND
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}