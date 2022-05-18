import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Card from "./Card";
const Veggie = () => {
  const [veggie, setveggie] = useState([]);

  useEffect(() => {
    getveggie();
  }, []);
  //   const variants = {
  //     hidden: { opacity: 0 },
  //     visible: { opacity: 1 },
  //   };
  const getveggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setveggie(JSON.parse(check));
    } else {
      const apiKey = "776f987a1d8c42f887188e220c8da3fe";
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?&query=vegetarian&apiKey=${apiKey}`
      );
      const data = await api.json();
      setveggie(data.results);
      console.log(data);
      localStorage.setItem("veggie", JSON.stringify(data.results));
    }
  };
  return (
    <div>
      <h1 className="font-medium text-lg my-[1rem]">Veggie items</h1>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          gap: "2rem",
          drag: "free",
        }}
      >
        {veggie &&
          veggie.map((recipe) => (
            <SplideSlide className="mx-[4rem] my-0" key={recipe.id}>
              <Card recipe={recipe} />
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default Veggie;
