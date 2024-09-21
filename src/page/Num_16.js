import React from "react";
import balanceBox from "../assets/img/balance_box.png";
import menu from "../assets/img/menu.png";
import navResult from "../assets/img/nav_result.png";
import flag from "../assets/img/flag.png";

export default function Num_16() {
  return (
    <div
      style={{
        backgroundColor: "rgba(48, 4, 117, 0.9)",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <div
        className="bg-[#25055D] flex items-center justify-between w-full text-white h-[4.8em] px-[0.75em]"
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
          className="rounded-[0.5em] px-[1.25em] py-[0.5em] cursor-pointer hidden sm:block"
          style={{
            background:
              "linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)",
          }}
        >
          generate link
        </div>
        <div
          className="w-[26em] h-[5em] "
          style={{
            backgroundImage: `url(${balanceBox})`,
            backgroundRepeat: "no-repeat", // Optional: Adjust as needed
            backgroundSize: "101% 101%",
            backgroundPosition: "-0.1em -0.2em",
          }}
        >
          <label className="flex justify-center opacity-70">
            MATIC BALANCE
          </label>
          <div className="flex justify-center align-middle mt-[-0.5em]">
            <img
              src={navResult}
              alt=""
              className="w-[1.5em] h-[1.5em] mr-1 self-center"
            />
            <span className="text-[2.6em]">0.00</span>
          </div>
        </div>
        <div
          className="rounded-lg px-5 py-2 opacity-0 hidden sm:block"
          style={{
            background:
              "linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)",
          }}
        >
          generate link
        </div>
        <button
          className="border-none bg-[#0000]"
          style={{
            fontSize: "inherit",
          }}
        >
          <img src={menu} className="w-[3em] h-[3em]" alt="" />
        </button>
      </div>

      <div
        className="text-center font-size font-bold block md:hidden mt-[2em]"
        style={{
          backgroundImage:
            "linear-gradient(92.7deg, rgb(0, 100, 251) 6.15%, rgb(30, 205, 248) 97.44%)",
          webkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fontSize: "3.5em",
        }}
      >
        AFFILIATE LEADERBOARD
      </div>

      {/* Center */}
      <div className="flex p-[1em] py-[1.75em]  justify-between">
        <div className="self-center">
          <div className="bg-inherit text-white text-2  text-xl sm:text-lg rounded-lg border border-sky-500 w-[10.5em] py-[0.5em] px-[0.4em]">
            <span className="">Become an Affiliate</span>
          </div>
        </div>
        <div
          className="text-center font-size font-bold hidden md:flex md:self-center"
          style={{
            backgroundImage:
              "linear-gradient(92.7deg, rgb(0, 100, 251) 6.15%, rgb(30, 205, 248) 97.44%)",
            webkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontSize: "2em",
          }}
        >
          AFFILIATE LEADERBOARD
        </div>
        <div className="self-center">
          <select className="bg-inherit text-white text-xl sm:text-lg rounded-lg border border-sky-500 w-[10.5em] py-[0.5em] px-[0.6em]">
            <option>All Time</option>
          </select>
        </div>
      </div>
      {/* Table */}
      <table
        className="w-full text-white table-auto"
        style={{
          borderSpacing: "0 10px",
          borderCollapse: "separate",
        }}
      >
        <thead className="bg-[#ffffff1a] h-[3.5em] sm:h-[2em]  text-[2.7em] md:text-[2.2em] xl:text-[1.5em]">
          <tr style={{ fontWeight: "100" }}>
            <th className="font-thin">#</th>
            <th className="font-thin">ADDRESS</th>
            <th className="font-thin">TIER 1</th>
            <th className="font-thin">TIER 2</th>
            <th className="font-thin">TIER 3</th>
            <th className="font-thin">TOTAL PAID AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#ffffff1a] h-14 mt-2 text-center self-center text-[2.5em] md:text-[2em] xl:text-[1.3em]">
            <td>
              <span>1</span>
            </td>
            <td>
              <span className="bg-green-500 text-black rounded-full p-3 text-[0.5em] leading-[1em] relative mr-[2em]">
                CK
                <img
                  src={flag}
                  className="absolute w-[1em] h-[1em] top-0 left-[1.95em]"
                  alt={flag}
                />
              </span>
              <span className="hidden sm:inline-block">0x42bdfesdrefd1</span>
              <span className="block sm:hidden">0x42...efd1</span>
            </td>
            <td className="text-green-500">20,017.37</td>
            <td className="text-green-500">3,263.00 </td>
            <td className="text-green-500">130.45</td>
            <td>23,410.82</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
