import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMeal from "../components/SingleMeal";
import { MEAL_SINGLE_URL,base_url } from "../constants";


const SpecificMealPage = () => {

  const { id } = useParams();

  const [meal, setMeal] = useState([]);

  async function getSingleMeal() {
      const res = await fetch(`${base_url}${MEAL_SINGLE_URL}${id}`);
      const data = await res.json();
    console.log(data.meals)
    setMeal(data.meals);
  }

    let ingredientsArr = [], measuresArr = [], specificMeal = {};

    if (meal && meal?.length > 0) {
        for (let props in meal[0]) {
            if (props.includes('strIngredient')) {
                if (meal[0][props]) ingredientsArr.push(meal[0][props]);
            }

            if (props.includes('strMeasure')) {
                if (meal[0][props]) {
                    if (meal[0][props].length > 1) {
                        measuresArr.push(meal[0][props]);
                    }
                }
            }
        }

        specificMeal = {
            id: meal[0]?.idMeal,
            title: meal[0]?.strMeal,
            category: meal[0]?.strCategory,
            area: meal[0]?.strArea,
            thumbnail: meal[0]?.strMealThumb,
            instructions: meal[0]?.strInstructions,
            source: meal[0]?.strSource,
            tags: meal[0]?.strTags,
            youtube: meal[0]?.strYoutube,
            ingredients: ingredientsArr,
            measures: measuresArr
        }
    }



  useEffect(() => {
    getSingleMeal();
  }, []);

  return (
    <div className='min-h-[48vh]'>
      <SingleMeal meal={specificMeal}/>
    </div>
  );
};

export default SpecificMealPage;
