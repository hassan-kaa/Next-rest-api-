import React from "react";
import Navbar from "../Components/Navbar";
import Popular from "../Components/Popular";
import Veggie from "../Components/Veggie";

function Pages() {
  return (
    <div className="w-full px-[10%] pb-6 ">
      <Navbar />
      <Popular />
      <Veggie />
    </div>
  );
}

export default Pages;
