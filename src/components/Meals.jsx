import { Link } from "react-router-dom";

const Meals = ({ meals }) => {
  return (
    <>
      <h1 className="w-3/5 m-auto font-bold text-3xl text-gray-500 mb-5 mt-5">
        Meals
      </h1>

      <div className="w-3/5 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {meals?.map((mealItem) => {
          const {
            idMeal: id,
            strMeal: meal,
            strMealThumb: thumbnail,
          } = mealItem;

          return (
            <Link
              to={`/meal/${id}`}
              className="p-4 cursor-pointer shadow-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
              key={id}
            >
              <div className="relative">
                <img
                  src={thumbnail}
                  alt={meal}
                  className="rounded-md w-full h-40 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
              <h2 className="font-semibold text-xl mt-3">{meal}</h2>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Meals;
