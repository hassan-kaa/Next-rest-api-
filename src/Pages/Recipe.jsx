import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
function Recipe({ id }) {
  let params = useParams();
  const [recipe, setRecipe] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  const getRecipe = async () => {
    const apiKey = "776f987a1d8c42f887188e220c8da3fe";
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`
    );
    const result = await data.json();
    console.log(result);
    setRecipe(result);
  };

  useEffect(() => {
    getRecipe();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="py-8 flex justify-start items-start">
        <div className="flex flex-col items-start justify-between w-1/2">
          <h1 className="text-lg font-bold mb-3">{recipe.title}</h1>
          <img src={recipe.image} className="w-[80%]" alt="" />
        </div>
        <div className="flex flex-col  w-1/2 ">
          <div className="flex mb-3">
            <motion.button
              onClick={() => {
                setActiveTab("instructions");
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              className={
                activeTab === "instructions"
                  ? "border-2 text-[10px] font-bold border-black p-2 mr-3"
                  : " bg-black text-[10px] font-bold text-white p-2 mr-3"
              }
            >
              Instructions
            </motion.button>
            <motion.button
              onClick={() => {
                setActiveTab("ingredients");
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              className={
                activeTab === "ingredients"
                  ? "border-2 text-[10px] font-bold border-black p-2"
                  : " bg-black text-[10px] font-bold text-white p-2 "
              }
            >
              Ingredients
            </motion.button>
          </div>
          <p className="text-base font-medium">
            {activeTab === "instructions" ? (
              <h2 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h2>
            ) : (
              recipe.extendedIngredients.map((item) => <h2>{item.name}</h2>)
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
