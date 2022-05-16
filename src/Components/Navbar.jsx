import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import Categories from "./Categories";
function Navbar() {
  const [searchText, setSearchText] = useState("");
  const updateSearch = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };
  return (
    <div className="flex flex-col justify-center items-start w-full py-4">
      <div className=" flex-col flex justify-center items-center self-center min-w-[50%]">
        <div className="bg-black rounded-lg w-full flex items-center justify-between font-light text-sm text-white ">
          <button
            type="submit"
            className="p-2"
            onClick={() => {
              console.log("hello");
            }}
          >
            <GoSearch />
          </button>
          <input
            onChange={(e) => {
              updateSearch(e);
            }}
            placeholder="Search for your recipe"
            type="text"
            name="Recipe"
            id=""
            className=" flex-1 border-none bg-transparent text-white outline-none "
          />
        </div>
        <Categories />
      </div>
    </div>
  );
}

export default Navbar;
