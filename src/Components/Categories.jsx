import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function Categories() {
  return (
    <div className=" w-[80%] flex mt-4 justify-around items-center ">
      <Slink to="/cuisine/italian">
        <FaPizzaSlice />
        <p className="text-[0.5rem]">Italian</p>
      </Slink>
      <Slink to="/cuisine/american">
        <FaHamburger />
        <p className="text-[0.5rem]">American</p>
      </Slink>
      <Slink to="/cuisine/thai">
        <GiNoodles />
        <p className="text-[0.5rem]">Thai</p>
      </Slink>
      <Slink to="/cuisine/japanese">
        <GiChopsticks />
        <p className="text-[0.5rem]">Japanese</p>
      </Slink>
    </div>
  );
}

export default Categories;
const Slink = styled(NavLink)`
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  background: black;
  height: 4rem;
  width: 4rem;
  justify-content: center;
  align-items: center;
  color: white;
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;
