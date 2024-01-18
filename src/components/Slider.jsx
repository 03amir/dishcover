import { useEffect, useState } from "react";
import SlideCard from "./SlideCard";
import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";
import { sliderLimit } from "../constants";

function Slider() {
  
  const [indianFood, setIndianFood] = useState([]);
  const [sindex, setsindex] = useState(0);

  async function getIndian() {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
    );
    const res = await data.json();
    setIndianFood(res.meals);
  }

  useEffect(() => {
    getIndian();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("called");
      handleRight();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [sindex]);

  function handleLeft() {
    sindex == 0 ? setsindex(0) : setsindex(sindex - 1);
  }

  function handleRight() {
    sindex == indianFood.length - sliderLimit
      ? setsindex(0)
      : setsindex(sindex + 1);
  }

  return (
    <>
      <h1 className="font-bold text-3xl text-gray-600 w-3/5 m-auto mt-20  ">
        Populer
      </h1>
      <div className="flex items-center justify-around w-3/5 m-auto mt-14">
        <SlArrowLeftCircle
          className="text-3xl opacity-90 cursor-pointer hover:text-red-500 transition duration-300"
          onClick={handleLeft}
        />

        {indianFood.slice(sindex, sindex + sliderLimit).map((el, idMeal) => {
          return <SlideCard key={idMeal} data={el} />;
        })}

        <SlArrowRightCircle
          className="text-3xl opacity-90 cursor-pointer hover:text-red-500 transition duration-300"
          onClick={handleRight}
        />
      </div>
    </>
  );
}

export default Slider;
