import React from 'react';
import { Link } from 'react-router-dom';

function SlideCard({ data }) {

    const { strMealThumb, strMeal, idMeal } = data;
    // console.log(data)

    return (
        <Link to={`/meal/${idMeal}`} className="w-60 relative cursor-pointer overflow-hidden transition-transform hover:scale-105 rounded-md p-5 shadow-lg">
            <div className="relative overflow-hidden">
                <img
                    className="rounded w-full h-40 object-cover mb-2 hover:transform hover:scale-110 transition duration-300 ease-in-out"
                    src={strMealThumb}
                    alt={strMeal}
                />
                <div className="absolute top-0 right-0 bg-orange-500 p-2 rounded-sm">
                    <h3 className="text-white text-xs font-semibold uppercase">{strMeal}</h3>
                </div>
            </div>
        </Link>
    );
}

export default SlideCard;
