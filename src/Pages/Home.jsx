import React from "react";
import Navbar from "../Components/Navbar";
import Popular from "../Components/Popular";
import Veggie from "../Components/Veggie";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Popular />
      <Veggie />
    </motion.div>
  );
}

export default Home;
