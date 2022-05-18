import React, { useState } from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Card({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="rounded-xl m-0 p-0 relative h-[35vh]  overflow-hidden">
        <img
          className="rounded-xl absolute left-0  w-full h-full object-cover "
          src={recipe.image}
          alt=""
        />
        <div className=" absolute w-full h-full bg-gradient-to-t from-black to-pink-500 z-4 opacity-30"></div>
        <p className="h-2/5  absolute text-center  bottom-[0%] left-[50%] translate-x-[-50%] translate-y-0 z-10  text-white text-[1rem]">
          {recipe.title}
        </p>
      </div>
    </Link>
  );
}

export default Card;
