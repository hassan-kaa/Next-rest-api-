import React from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Cuisine() {
  let params = useParams();
  const [CuisineRecipes, setCuisineRecipes] = useState([]);
  const getCuisineRecipes = async (name) => {
    const apiKey = "776f987a1d8c42f887188e220c8da3fe";
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisineRecipes(recipes.results);
  };
  useEffect(() => {
    getCuisineRecipes(params.type);
  }, [params]);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-6">
        {CuisineRecipes &&
          CuisineRecipes.map((item) => <Card key={item.id} recipe={item} />)}
      </div>
    </div>
  );
}

export default Cuisine;
