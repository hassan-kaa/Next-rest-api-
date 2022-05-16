import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function Categories() {
  return (
    <div className=" w-[80%] flex mt-4 justify-around items-center ">
      <NavLink to={"/Categories/italian"}>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full flex-col bg-black  h-[4rem] w-[4rem] flex justify-center items-center text-white"
        >
          <FaPizzaSlice />
          <p className="text-[0.5rem]">Italian</p>
        </motion.button>
      </NavLink>
      <NavLink to={"/Categories/american"}>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full flex-col  bg-black  h-[4rem] w-[4rem] flex justify-center items-center text-white"
        >
          <FaHamburger />
          <p className="text-[0.5rem]">American</p>
        </motion.button>
      </NavLink>
      <NavLink to={"/Categories/thai"}>
        <motion.button
          onClick={(e) => {}}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full flex-col  bg-black  h-[4rem] w-[4rem] flex justify-center items-center text-white"
        >
          <GiNoodles />
          <p className="text-[0.5rem]">Thai</p>
        </motion.button>
      </NavLink>
      <NavLink to={"/Categories/japanese"}>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full flex-col  bg-black  h-[4rem] w-[4rem] flex justify-center items-center text-white"
        >
          <GiChopsticks />
          <p className="text-[0.5rem]">Japanese</p>
        </motion.button>
      </NavLink>
    </div>
  );
}

export default Categories;
