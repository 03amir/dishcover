import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meal from "../components/Meal";
import { base_url, MEAL_CATEGORIES_URL } from "../constants";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const [categoryMeals, setCategoryMeals] = useState([]);

  async function getCategoryMeals() {
    const res = await fetch(`${base_url}${MEAL_CATEGORIES_URL}${categoryName}`);
    const data = await res.json();
    setCategoryMeals(data.meals);
  }

  useEffect(() => {
    getCategoryMeals();
  }, []);

  return (
    <main className="py-5">
      {categoryMeals?.length ? <Meal meals={categoryMeals} /> : null}
    </main>
  );
};

export default CategoryPage;
