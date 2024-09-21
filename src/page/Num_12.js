import React from "react";
import balanceBox from "../assets/img/balance_box.png";
import menu from "../assets/img/menu.png";
import navResult from "../assets/img/nav_result.png";

export default function Num_12() {
  return (
    <div
      style={{
        backgroundColor: "rgba(48, 4, 117, 0.9)",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <div
        className="bg-[#25055D] flex items-center justify-between w-full text-white h-[4.8em] px-[1em] relative"
        style={{ boxShadow: "0px 7px 20px 0px #0000004D" }}
      >
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            style={{
              width: "3em",
              height: "3em",
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div
          className="rounded-lg px-[2em] py-[0.5em] cursor-pointer hidden sm:block lg:mr-[17em] md:mr-[24em]"
          style={{
            background:
              "linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)",
          }}
        >
          generate link
        </div>
        <div className="hidden lg:flex ml-[17em]">
          <div className="border border-purple-500 px-[1.75em] w-[3.8em]  rounded-md flex flex-col justify-center items-center mx-[0.1em] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-[1.25em] h-[1.25em]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
            <span className="text-[0.45em] text-center">FAQ</span>
          </div>
          <div className="border border-purple-500 px-[1.75em] w-[3.8em]  rounded-md flex flex-col items-center mx-[0.1em] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-[1.25em] h-[1.25em]  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>

            <span className="text-[0.45em] text-center">Link Manager</span>
          </div>
          <div className="border border-purple-500 px-[1.75em] w-[3.8em]  rounded-md flex flex-col items-center mx-[0.1em] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-[1.25em] h-[1.25em]  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>

            <span className="text-[0.45em] text-center">Earning Report</span>
          </div>
          <div className="border border-purple-500 px-[1.75em] w-[3.8em]  rounded-md flex flex-col justify-center items-center mx-[0.1em] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-[1.25em] h-[1.25em]  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>

            <span className="text-[0.45em] text-center">Dashboard</span>
          </div>
        </div>
        <div
          className="rounded-lg px-8 py-2 opacity-0  lg:hidden xl:hidden 2xl:hidden"
          style={{
            background:
              "linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)",
          }}
        >
          generate link
        </div>
        <div
          className="border-none bg-[#0000] cursor-pointer"
          style={{
            fontSize: "inherit",
          }}
        >
          <img src={menu} className="w-[3em] h-[3em]" alt="" />
        </div>
        <div
          className="w-[26em] h-[5em] absolute left-[50%]"
          style={{
            backgroundImage: `url(${balanceBox})`,
            backgroundRepeat: "no-repeat", // Optional: Adjust as needed
            backgroundSize: "101% 101%",
            backgroundPosition: "-0.1em -0.2em",
            transform: "translateX(-50%)",
          }}
        >
          <label className="flex justify-center opacity-70">
            MATIC BALANCE
          </label>
          <div className="flex justify-center align-middle mt-[-0.5em]">
            <img
              src={navResult}
              alt=""
              className="w-[1.5em] h-[1.5em] mr-[0.2em] self-center"
            />
            <span className="text-[2.6em]">0.00</span>
          </div>
        </div>
      </div>
      {/* Center */}
      <div className="flex p-[1em] py-[1.75em] justify-center">
        <div
          className="font-size font-bold "
          style={{
            backgroundImage:
              "linear-gradient(92.7deg, rgb(0, 100, 251) 6.15%, rgb(30, 205, 248) 97.44%)",
            webkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontSize: "2em",
          }}
        >
          REFERRAL PROGRAM EARNINGS REPORT
        </div>
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
        <thead className="bg-[#ffffff1a] h-[2.5em] text-[3.428vw] md:text-[1.3em] px-[0.5em] hidden sm:table-header-group">
          <tr>
            <th className="font-thin">
              <span className="flex items-center justify-center">
                Date
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
                TIER 01
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
                TIER 02
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
                TIER 03
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
                TOTAL AMOUNT
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
                STATUS
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
        <tbody className="px-[0.5em] hidden sm:table-header-group">
          <tr className="bg-[#ffffff1a] h-[2em] text-center self-center text-[2.8em] md:text-[1.4em] xl:text-[1em] my-[0.1em]">
            <td>
              <span>12/2/24</span>
            </td>
            <td>
              <span>0x42bdfesdrefd1</span>
            </td>
            <td>
              <span>0x42bdfesdrefd1</span>
            </td>
            <td>
              <span>0x42bdfesdrefd1</span>
            </td>
            <td>
              <span className="flex items-center justify-center text-[0.9em]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[1em] h-[1em]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                6969.46
              </span>
            </td>
            <td className="text-green-500">Active</td>
          </tr>
        </tbody>

        {/* Mobile*/}
        <thead className="bg-[#ffffff1a] h-[2.5em] text-[3.428vw] md:text-[1.3em] px-[0.5em] sm:hidden">
          <tr>
            <th className="font-thin">
              <span className="flex items-center justify-center">
                DATE
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
                STATUS
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
                HASH DETAILS
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

        <tbody className="px-[0.5em] sm:hidden">
          <tr className="bg-[#ffffff1a] h-[2em] text-center self-center text-[2.8em] md:text-[1.4em] xl:text-[1em] my-[0.1em]">
            <td>
              <span>12/2/24</span>
            </td>
            <td>
              <span className="flex items-center justify-center text-[0.9em]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[1em] h-[1em]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                6969.46
              </span>
            </td>
            <td>
              <span>0x42bdfesdrefd1</span>
            </td>
          </tr>
        </tbody>
        {/* -------- */}
      </table>
    </div>
  );
}
