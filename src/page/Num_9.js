import React from "react";
import menu from "../assets/img/menu.png";
import money from "../assets/img/money.png";
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
        className="bg-[#25055D] flex items-center justify-between w-full text-white h-[10em]  sm:h-[4.8em] px-[1em] relative"
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
          TOP 10 HIGH ROLLERS
        </div>
        <div
          className="border-none bg-[#0000] cursor-pointer"
          style={{
            fontSize: "inherit",
          }}
        >
          <img src={menu} className="w-[5em] h-[5em] sm:w-[3em] sm:h-[3em]" alt="" />
        </div>
      </div>
      {/* Center */}
      <div className="p-0">
        <div className="flex pt-[0.8em] pb-[0.1em] justify-center">
            <div className="text-center font-normal text-white text-[3.5em]  sm:text-[1.5em]">
            Daily Tournament
            </div>
        </div>

        <div className="flex flex-row justify-center my-[3em] sm:my-[1.25em]">
            <div className=" text-white bg-[#692bd6] rounded-lg py-[3em] px-[2em] sm:p-[0.3em] opacity-70 mr-[1em]">
            <div className="text-center text-xl">#0</div>
            <div className="text-center  text-2xl sm:text-base font-thin">Your place</div>
            </div>

            <div className=" text-white bg-[#692bd6] rounded-lg py-[3em] px-[2em] sm:p-[0.3em] opacity-70 mr-[1em]">
            <div className="text-center text-2xl">0</div>
            <div className="text-center  text-2xl sm:text-base font-thin">
                Your Daily Turnover 
            </div>
            </div>

            <div className="text-white bg-[#692bd6] rounded-lg py-[3em] px-[2em] sm:p-[0.3em] opacity-70 mr-[1em]">
            <div className="text-center text-2xl">17:53:19</div>
            <div className="text-center  text-2xl sm:text-base font-thin">Ending Time</div>
            </div>
        </div>
        <div className="text-white w-[100%] flex flex-col items-center sm:flex-row sm:justify-around my-[1em] sm:my-[0.3em] text-[2.8em] sm:text-[1.2em]">
            <div className="flex">
            <div>Win tickets to the weekly and monthly jackpots</div>
            <img src={money} alt={money} className="w-[2em] h-[2em]" />
            </div>
            <div>Condition to join the tournament: 500 daily turnover</div>
        </div>
        {/* Table */}
        <table
            className="w-full text-white table-auto"
            style={{
            borderSpacing: "0 0.5em",
            borderCollapse: "separate",
            }}
        >
            {/*Mobile tbody*/}
            <thead className="bg-[#ffffff1a] h-[2.5em] text-[3.428vw] md:text-[1.4em] lg:text-[1.3em] px-[0.5em]">
            <tr>
                <th className="font-thin">
                <span className="flex items-center justify-center">#</span>
                </th>
                <th className="font-thin">
                <span className="flex items-center justify-center">
                    PLAYER
                    <svg
                    class="w-[1.2em] h-[1.2em] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M12.8 3.4a1 1 0 0 0-1.6 0l-4 6A1 1 0 0 0 8 11h8a1 1 0 0 0 .8-1.6l-4-6Zm-1.6 17.2a1 1 0 0 0 1.6 0l4-6A1 1 0 0 0 16 13H8a1 1 0 0 0-.8 1.6l4 6Z"
                        clip-rule="evenodd"
                    ></path>
                    </svg>
                </span>
                </th>
                <th className="font-thin">
                <span className="flex items-center justify-center">
                    TRADES
                    <svg
                    class="w-[1.2em] h-[1.2em] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M12.8 3.4a1 1 0 0 0-1.6 0l-4 6A1 1 0 0 0 8 11h8a1 1 0 0 0 .8-1.6l-4-6Zm-1.6 17.2a1 1 0 0 0 1.6 0l4-6A1 1 0 0 0 16 13H8a1 1 0 0 0-.8 1.6l4 6Z"
                        clip-rule="evenodd"
                    ></path>
                    </svg>
                </span>
                </th>
                <th className="font-thin">
                <span className="flex items-center justify-center">
                    TURNOVER
                    <svg
                    class="w-[1.2em] h-[1.2em] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M12.8 3.4a1 1 0 0 0-1.6 0l-4 6A1 1 0 0 0 8 11h8a1 1 0 0 0 .8-1.6l-4-6Zm-1.6 17.2a1 1 0 0 0 1.6 0l4-6A1 1 0 0 0 16 13H8a1 1 0 0 0-.8 1.6l4 6Z"
                        clip-rule="evenodd"
                    ></path>
                    </svg>
                </span>
                </th>
                <th className="font-thin">
                <span className="flex items-center justify-center">
                    PRIZE(TICKETS)
                    <svg
                    class="w-[1.2em] h-[1.2em] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M12.8 3.4a1 1 0 0 0-1.6 0l-4 6A1 1 0 0 0 8 11h8a1 1 0 0 0 .8-1.6l-4-6Zm-1.6 17.2a1 1 0 0 0 1.6 0l4-6A1 1 0 0 0 16 13H8a1 1 0 0 0-.8 1.6l4 6Z"
                        clip-rule="evenodd"
                    ></path>
                    </svg>
                </span>
                </th>
            </tr>
            </thead>
            <tbody className="px-[0.5em]">
            <tr className="bg-[#ffffff1a] h-[2.2em] text-center self-center text-[2.8em] md:text-[1.4em] xl:text-[1em] my-[0.1em]">
                <td>1</td>
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
                    <span className="hidden sm:inline-block">0x42bdfesdrefd1</span>
                    <span className="block sm:hidden">0x42...efd1</span>
                </span>
                </td>
                <td>244</td>
                <td>6,100</td>
                <td>500</td>
            </tr>
            </tbody>
        </table>
        </div>
      </div>
  );
}
