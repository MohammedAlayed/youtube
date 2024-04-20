import React from "react";
import { Menu, Mic, CopyPlus, Youtube, Search } from "lucide-react";
import logo from "../assets/Logo.png";
export default function Header() {
  return (
    <>
      <div className="flex items-center p-3 justify-between gap-10 lg:gap-20">
        <div className="flex gap-4 items-center max-sm:hidden">
          <button>
            <Menu />
          </button>
          <div className="flex items-center gap-1">
            <button>
              <Youtube color="red" />
            </button>
            <span className="font-semibold">Youtube</span>
          </div>
        </div>
        <div className="flex items-center flex-grow  justify-center gap-2">
          <div className="flex-grow max-w-lg relative">
            <input
              className="py-2 px-3 rounded-3xl border-2 border-gray-400  w-full  "
              type="text"
            />

            <button className="absolute right-3 top-2 z-10 ">
              <Search  />
            </button>
          </div>

          <button>
            <Mic />
          </button>
        </div>
        <div className="flex gap-4 items-cente  max-sm:hidden">
          <button>
            <CopyPlus />
          </button>
          <button>
            <Mic />
          </button>

          <a href="/">
            <img className="h-15 w-20" src={logo} alt="logo" />
          </a>
        </div>
      </div>
    </>
  );
}
