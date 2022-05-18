import Card from "../Components/Card";
import React from "react";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Searched() {
  const params = useParams();
  const [SearchedRecipes, setSearchedRecipes] = useState([]);
  const getSearchedRecipes = async (name) => {
    const apiKey = "776f987a1d8c42f887188e220c8da3fe";
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };
  useEffect(() => {
    getSearchedRecipes(params.search);
  }, [params]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-6">
        {SearchedRecipes &&
          SearchedRecipes.map((item) => <Card recipe={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default Searched;
