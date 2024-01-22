import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meals from "../components/Meals";
import { base_url, MEAL_CATEGORIES_URL } from "../constants";
import { useSelector } from "react-redux";

const CategoryPage = () => {

  const { categoryName } = useParams();

  const [categoryMeals, setCategoryMeals] = useState([]);

  const categories = useSelector((state)=>state.categories.categories);
  let catDescription = "";


    categories.forEach(category => {
      if (category?.strCategory === categoryName) catDescription = category?.strCategoryDescription;
    })


  async function getCategoryMeals() {
    const res = await fetch(`${base_url}${MEAL_CATEGORIES_URL}${categoryName}`);
    const data = await res.json();
    setCategoryMeals(data.meals);
  }

  useEffect(() => {
    getCategoryMeals();
  }, [categoryName]);

  return (
    <main className='min-h-[48vh] py-5 my-9'>
      <div className='w-3/5 m-auto p-8 border-2 border-orange-400 rounded-md mb-10'>
        <h2 className='text-4xl font-bold mb-3 text-gray-700'>{categoryName}</h2>
        <p className='font-semibold text-lg'>{catDescription}</p>
      </div>
      {categoryMeals?.length ? <Meals meals={categoryMeals} /> : null}
    </main>
  );
};

export default CategoryPage;
