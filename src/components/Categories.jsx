import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    async function getCategories() {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await res.json();
        setCategories(data.categories);
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="sm:w-[80%] lg:w-3/5 m-auto mt-20 ">
            <div className="container">
                <h1 className="font-bold text-3xl text-gray-600 mx-2 relative">
                    Categories
                </h1>

                <section className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
                    {categories.map((category) => {
                        const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;

                        return (
                            <Link
                                to={`/category/${title}`}
                                key={id}
                                className="relative rounded-md p-5 shadow-lg hover:shadow-lg transition duration-300 ease-in-out cursor-pointer mb-4 sm:mb-8"
                            >
                                <div className="absolute top-0 right-0 bg-orange-500 p-2 rounded-sm z-10">
                                    <h3 className="text-white text-xs font-semibold uppercase ">{title}</h3>
                                </div>
                                <div className="overflow-hidden rounded w-full h-full object-cover mb-2 hover:transform hover:scale-110 transition duration-300 ease-in-out">
                                    <img
                                        src={thumbnail}
                                        alt={title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Link>

                        );
                    })}
                </section>
            </div>
        </div>
    );
};

export default CategoryList;
