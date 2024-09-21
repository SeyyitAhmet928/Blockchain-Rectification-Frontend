import React from "react";
import balanceBox from "../assets/img/balance_box.png";
import menu from "../assets/img/menu.png";
import navResult from "../assets/img/nav_result.png";

export default function Num_2() {
  return (
    <div
      style={{
        backgroundColor: "rgba(48, 4, 117, 0.9)",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <div className="h-[18.8em] sm:h-[13.8em] lg:h-[10em] ">
        <div
          className="bg-[#25055D] flex items-center justify-between w-full text-white h-[8.8em] sm:h-[4.8em] px-[1em] relative"
          style={{ boxShadow: "0px 7px 20px 0px #0000004D" }}
        >
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-[7em] h-[8em] sm:w-[3em] sm:h-[3em]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div
            className="rounded-[0.5em] px-[1.5em] py-[0.4em] cursor-pointer hidden sm:block lg:mr-[17em]  md:mr-[24em]"
            style={{
              background:
                "linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)",
            }}
          >
            generate link
          </div>
          <div className="hidden lg:flex ml-[17em]">
            <div className="border border-purple-500 px-[1em] w-[3.8em]  rounded-[0.375em] flex flex-col justify-center items-center mx-[0.12em] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[0.8em] h-[0.8em]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
              <span className="text-[0.5em] text-center">FAQ</span>
            </div>
            <div className="border border-purple-500 px-[1em] w-[3.8em]  rounded-[0.375em] flex flex-col items-center mx-[0.12em] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[0.8em] h-[0.8em]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>

              <span className="text-[0.5em] text-center">Link Manager</span>
            </div>
            <div className="border border-purple-500 px-[1em] w-[3.8em]  rounded-[0.375em] flex flex-col items-center mx-[0.12em] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[0.8em] h-[0.8em]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>

              <span className="text-[0.5em] text-center">Earning Report</span>
            </div>
            <div className="border border-purple-500 px-[1em] w-[3.8em]  rounded-[0.375em] flex flex-col justify-center items-center mx-[0.12em] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[0.8em] h-[0.8em]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>

              <span className="text-[0.5em] text-center">Dashboard</span>
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
            className="border-none bg-[#0000]"
            style={{
              fontSize: "inherit",
            }}
          >
            <img
              src={menu}
              className="w-[5em] h-[5em] sm:w-[3em] sm:h-[3em]"
              alt=""
            />
          </div>
          <div
            className="w-[38em] h-[8.5em] sm:w-[26em] sm:h-[5em]  absolute left-[50%]"
            style={{
              backgroundImage: `url(${balanceBox})`,
              backgroundRepeat: "no-repeat", // Optional: Adjust as needed
              backgroundSize: "101% 101%",
              backgroundPosition: "-0.1em -0.2em",
              transform: "translateX(-50%)",
            }}
          >
            <label className="justify-center opacity-70 hidden sm:flex">
              MATIC BALANCE
            </label>
            <div className="flex justify-center align-middle mt-[-0.5em]">
              <img
                src={navResult}
                alt=""
                className="w-[2.5em] h-[2.5em] sm:w-[1.5em] sm:h-[1.5em] mr-[0.2em] self-center"
              />
              <span className="text-[6em] sm:text-[2.6em]">0.00</span>
            </div>
          </div>
        </div>
        {/* Center */}
        <div className="flex p-[0.5em] py-[3.5em] sm:p-[0.5em] sm:py-[1.5em] justify-center">
          <div
            className="font-size font-bold text-[3.6em] sm:text-[2.8em] lg:text-[2em]"
            style={{
              backgroundImage:
                "linear-gradient(92.7deg, rgb(0, 100, 251) 6.15%, rgb(30, 205, 248) 97.44%)",
              webkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            REFERRAL PROGRAM LINK MANAGER
          </div>
        </div>
      </div>
      {/* Table */}
      {/* Web-Content =>thead */}
      <div className="bg-[#ffffff1a] h-[4.4em]  flex-row item-center justify-start rounded-tl-lg rounded-tr-lg z-2 text-white hidden sm:flex">
        <div className="w-[10%] pl-[1.5em] leading-[1.25em] flex flex-row items-center justify-start  md:text-[1.5em] lg:text-[1.1em] font-medium text-center pr-[0.5em]">
          DATE CREATED
        </div>
        <div className="w-[15.7%] pl-[1.5em] leading-[1.25em] flex flex-row items-center justify-start md:text-[1.5em] lg:text-[1.1em] font-medium text-center pr-[0.5em]">
          NAME
        </div>
        <div className="w-[29.2%] pl-[1.5em] leading-[1.25em] flex flex-row items-center justify-start md:text-[1.5em] lg:text-[1.1em] font-medium text-center pr-[0.5em]">
          LINK
        </div>
        <div className="w-[13.5%] pl-[1.5em] leading-[1.25em] flex flex-row items-center justify-start md:text-[1.5em] lg:text-[1.1em] font-medium text-center pr-[0.5em]">
          FRIENDS REGISTERED
        </div>
        <div className="w-[11.2%] pl-[1.5em] leading-5 flex flex-row items-center justify-start md:text-[1.5em] lg:text-[1.1em] font-medium text-center pr-[0.5em]">
          EARN TODAY
        </div>
        <div className="w-[12.7%] pl-[1.5em] leading-5 flex flex-row items-center justify-start md:text-[1.5em] lg:text-[1.1em] font-medium text-center pr-[0.5em]">
          EARN TODAY
        </div>
      </div>
      {/* ---------------------  */}

      {/* Mobile =>thead */}
      <div className="bg-[#ffffff1a] h-[4.4em] flex flex-row item-center justify-start rounded-tl-lg rounded-tr-lg z-2 text-white sm:hidden">
        <div className="w-[23%] pl-[1.5%] leading-5 flex flex-row items-center justify-start text-[1.9em]  md:text-[1.5em] lg:text-[1.1em] font-medium text-center pr-[0.5em]">
          DATE/NAME
        </div>
        <div className="w-[23%] pl-[1.5%] leading-5 flex flex-row items-center justify-start text-[1.9em] md:text-[1.5em] lg:text-[1.1em] font-medium text-center pr-[0.5em]">
          FRIENDS
        </div>
        <div className="w-[23%] pl-[1.5%] leading-5 flex flex-row items-center justify-start text-[1.9em] md:text-[1.5em] lg:text-[1.1em] font-medium text-center pr-[0.5em]">
          EARN TODAY
        </div>
        <div className="w-[23%] pl-[1.5%] leading-5 flex flex-row items-center justify-start text-[1.9em]  md:text-[1.5em] lg:text-[1.1em] font-medium text-center pr-[0.5em]">
          EARNINGS TOTAL
        </div>
      </div>
      {/* --------------------- */}

      {/* Web-Content => tbody */}
      <div
        className="mt-[0.2em] overflow-y-scroll hidden sm:block"
        style={{ height: "calc(100vh - 15.6em)" }}
      >
        <div className="flex flex-col">
          <div className="flex flex-row justify-start items-center h-[5.3em] sm:h-[4.7em] mb-[0.2em] sm:mb-[0.1em] bg-[#ffffff1a] text-white">
            <div class="w-[10.8%] text-[1.1em] text-center">05.03.24</div>
            <div class="w-[15.8%] text-[1.1em]">www123</div>
            <div class="w-[29.2%] flex flex-row justify-between items-center relative">
              <div class="w-[92%] text-[1.1em]">
                https://upvsdown.com?ref=MzQwOTcwNDMxNzA5NTgzMDAxNjY3
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-[1.75em] h-[1.75em] ml-[0.25em] cursor-pointer "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </div>
            <div class="w-[13.5%] text-[1.1em] text-center">0</div>
            <div className="w-[11.2%] text-[1.35em] font-normal leading-[1.5em] text-center flex justify-center">
              <img
                src={navResult}
                className="w-[0.8em] h-[0.8em] self-center mr-[0.125em]"
                alt={navResult}
              />
              0.000000
            </div>
            <div className="w-[12.7%] text-[1.35em] font-normal leading-[1.5em] text-center flex justify-center">
              <img
                src={navResult}
                className="w-[0.8em] h-[0.8em] self-center mr-[0.125em]"
                alt={navResult}
              />
              0.000000
            </div>
            <svg
              class="w-[1.5em] h-[1.5em] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </div>
          <div className="overflow-hidden flex flex-row justify-between items-center h-[10em] bg-[#ffffff1a]">
            <div className="flex flex-col items-center justify-between w-[33%] H-[80%]">
              <div className="text-[1.2em] text-white">
                Friends Tier 01 (20%)
              </div>
              <div className="flex flex-row w-[80%]">
                <div
                  className="flex flex-col w-[50%]"
                  style={{ borderRight: ".08em solid rgba(151,151,151,.2)" }}
                >
                  <div className="text-white text-center text-[1.2em]">0</div>
                  <div className="text-white flex justify-center">
                    <img
                      src={navResult}
                      className="w-[0.7em] h-[0.7em] mr-[0.125em] text-[1.2em] self-center"
                      alt={navResult}
                    />{" "}
                    0.000000
                  </div>
                  <div className="text-center text-white text-[0.7em]">
                    Today
                  </div>
                </div>

                <div className="flex flex-col w-[50%]">
                  <div className="text-white text-center text-[1.2em]">0</div>
                  <div className="text-white flex justify-center">
                    <img
                      src={navResult}
                      className="w-[0.7em] h-[0.7em] mr-[0.125em] text-[1.2em] self-center"
                      alt={navResult}
                    />{" "}
                    0.000000
                  </div>
                  <div className="text-center text-white text-[0.7em]">
                    Today(Paid)
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between w-[33%] H-[80%]">
              <div className="text-[1.2em] text-white">
                Friends Tier 01 (20%)
              </div>
              <div className="flex flex-row w-[80%]">
                <div
                  className="flex flex-col w-[50%]"
                  style={{ borderRight: ".08em solid rgba(151,151,151,.2)" }}
                >
                  <div className="text-white text-center text-[1.2em]">0</div>
                  <div className="text-white flex justify-center">
                    <img
                      src={navResult}
                      className="w-[0.7em] h-[0.7em] mr-[0.125em] text-[1.2em] self-center"
                      alt={navResult}
                    />{" "}
                    0.000000
                  </div>
                  <div className="text-center text-white text-[0.7em]">
                    Today
                  </div>
                </div>

                <div className="flex flex-col w-[50%]">
                  <div className="text-white text-center text-[1.2em]">0</div>
                  <div className="text-white flex justify-center">
                    <img
                      src={navResult}
                      className="w-[0.7em] h-[0.7em] mr-[0.125em] text-[1.2em] self-center"
                      alt={navResult}
                    />{" "}
                    0.000000
                  </div>
                  <div className="text-center text-white text-[0.7em]">
                    Today(Paid)
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between w-[33%] H-[80%]">
              <div className="text-[1.2em] text-white">
                Friends Tier 01 (20%)
              </div>
              <div className="flex flex-row w-[80%]">
                <div
                  className="flex flex-col w-[50%]"
                  style={{ borderRight: ".08em solid rgba(151,151,151,.2)" }}
                >
                  <div className="text-white text-center text-[1.2em]">0</div>
                  <div className="text-white flex justify-center">
                    <img
                      src={navResult}
                      className="w-[0.7em] h-[0.7em] mr-[0.125em] text-[1.2em] self-center"
                      alt={navResult}
                    />{" "}
                    0.000000
                  </div>
                  <div className="text-center text-white text-[0.7em]">
                    Today
                  </div>
                </div>

                <div className="flex flex-col w-[50%]">
                  <div className="text-white text-center text-[1.2em]">0</div>
                  <div className="text-white flex justify-center">
                    <img
                      src={navResult}
                      className="w-[0.7em] h-[0.7em] mr-[0.125em] text-[1.2em] self-center"
                      alt={navResult}
                    />{" "}
                    0.000000
                  </div>
                  <div className="text-center text-white text-[0.7em]">
                    Today(Paid)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------- */}

      {/* <Mobile => tbody */}
      <div className="sm:hidden" style={{ fontSize: "unset" }}>
        <div className="bg-[#ffffff1a] flex flex-row items-center justify-center mb-[0em] h-[5.8em] font-normal">
          <div className="text-[2em] overflow-hidden overflow-ellipsis text-center w-[23%] text-white">
            "05.03.24"
            <br />
            "www123"
          </div>
          <div className="text-[2em] overflow-hidden overflow-ellipsis text-center w-[23%] text-white">
            0
          </div>
          <div className="text-[2em] overflow-hidden overflow-ellipsis text-center w-[23%] text-white">
            <span className="flex justify-center">
              <img
                src={navResult}
                className="w-[1.2em] h-[1.2em] mr-[0.3em]"
                alt={navResult}
              />{" "}
              0.000000
            </span>
          </div>
          <div className="text-[2em] overflow-hidden overflow-ellipsis text-center w-[23%] text-white">
            <span className="flex justify-center">
              <img
                src={navResult}
                className="w-[1.2em] h-[1.2em] mr-[0.3em]"
                alt={navResult}
              />{" "}
              0.000000
            </span>
          </div>
          <div className="w-[8%] cursor-pointer flex justify-center">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </div>
          <div className=""></div>
        </div>
        <div className="bg-[#ffffff1a] flex flex-row justify-between h-[5.8em] pl-[1em] pr-[1em] text-white w-[100%]">
          <div className="flex items-center text-[1.3em]">
            https://upvsdown.com?ref=MzQwOTcwNDMxNzA5NTgzMDAxNjY3
          </div>
          <div className="flex items-center justify-center text-[1.3em] border ml-[1em] py-[0em] px-[1em] rounded-md my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-[1.75em] h-[1.75em] ml-[0.25em] cursor-pointer "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
            Copy Link
          </div>
        </div>
      </div>
      {/* -------------- */}
    </div>
  );
}
