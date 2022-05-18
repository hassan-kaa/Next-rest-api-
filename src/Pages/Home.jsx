import React from "react";
import Navbar from "../Components/Navbar";
import Popular from "../Components/Popular";
import Veggie from "../Components/Veggie";
function Home() {
  return (
    <div>
      <Navbar />
      <Popular />
      <Veggie />
    </div>
  );
}

export default Home;
