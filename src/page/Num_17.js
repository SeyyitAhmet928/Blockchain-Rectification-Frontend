import React from "react";
import menu from "../assets/img/menu.png";
import navResult from "../assets/img/nav_result.png";
import flag from "../assets/img/flag.png";

export default function Num_9() {
  return (
    <div
      style={{
        backgroundColor: "rgba(48, 4, 117, 0.9)",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <div
        className="bg-[#25055D] flex items-center justify-between w-full text-white h-[10em]  sm:h-[4.8em] px-[1em] relative mb-[1em]"
        style={{ boxShadow: "0px 7px 20px 0px #0000004D" }}
      >
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-[5em] h-[5em] sm:w-[3em] sm:h-[3em]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>

        <div
          className="font-size font-bold text-[4em] sm:text-[3em]"
          style={{
            backgroundImage:
              "linear-gradient(92.7deg, rgb(0, 100, 251) 6.15%, rgb(30, 205, 248) 97.44%)",
            webkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          WEEKLY WINNERS HISTORY
        </div>
        <div
          className="border-none bg-[#0000] cursor-pointer"
          style={{
            fontSize: "inherit",
          }}
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-[5em] h-[5em] sm:w-[3em] sm:h-[3em]"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
      {/* Center */}
      <div className="p-0">
        {/* Table */}
        <table
          className="w-full text-white table-auto mt-[1em]"
          style={{
            borderSpacing: "0 0.5em",
            borderCollapse: "separate",
          }}
        >
          {/*Mobile tbody*/}
          <thead className="bg-[#ffffff1a] h-[2.5em] text-[3.428vw] md:text-[1.4em] lg:text-[1.3em] px-[0.5em]">
            <tr>
              <th className="font-thin">
                <span className="flex items-center justify-center">DATE</span>
              </th>
              <th className="font-thin">WINNER</th>
              <th className="font-thin">WALLET</th>
              <th className="font-thin">JACKPOT</th>
              <th className="font-thin">PRIZE</th>
            </tr>
          </thead>
          <tbody className="px-[0.5em]">
            <tr className="bg-[#ffffff1a] h-[2.2em] text-center self-center text-[2.8em] md:text-[1.4em] xl:text-[1em] my-[0.1em]">
              <td>12.2.24</td>
              <td>
                <span>
                  <span className="bg-green-500 text-black rounded-full p-[0.85em] mr-[2em] ml-[0.8em] text-xs relative">
                    CK
                    <img
                      src={flag}
                      className="absolute w-[1em] h-[1em] top-0 left-7"
                      alt={flag}
                    />
                  </span>
                </span>
              </td>
              <td>0x42bdfesdrefd1</td>
              <td>1</td>
              <td>
                <span className="flex justify-center">
                    <img src={navResult} className="w-[0.7em] h-[0.7em] self-center mr-[0.3em]"/> 6969.46
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
