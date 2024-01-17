import { FaUtensilSpoon } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineCheckSquare } from 'react-icons/ai';

const MealSingle = ({ meal }) => {

    console.log(meal);

    let tags = meal?.tags?.split(',');
    console.log(meal);

    let instructions = meal?.instructions?.split('\r\n');
    instructions = instructions?.filter(instruction => instruction.length > 1);

    return (
        <div className='mb-20 mt-10'>
        
            <div className='w-3/5 m-auto p-2'>

                <h1 className='text-3xl font-bold my-10 ml-2 text-gray-700'>Meal Details</h1>

                <section className='bg-white p-8  border-2 border-black rounded-sm '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                        <div className=''>
                            <img src={meal?.thumbnail} alt="" className='w-full h-auto rounded-md' />
                        </div>

                        <div className=''>
                            <h3 className='text-orange-500 text-3xl font-semibold mb-2'>{meal?.title}</h3>
                            <div className='py-4'>
                                <div className='flex items-center mb-2'>
                                    <span className='ppercase font-semibold mr-2'>CATEGORY:</span>
                                    <span className='uppercase'>{meal?.category}</span>
                                </div>

                                <div className='flex items-center mb-2'>
                                    <span className='text-lg font-semibold'>Source:</span>
                                    <a href={meal.source} className='ml-2'>
                                        {meal.source ? (meal?.source).substring(0, 40) + "..." : "Not found"}
                                    </a>
                                </div>
                            </div>

                            <div className='flex flex-wrap items-center  mb-5'>

                                <h2 className='text-lg font-semibold'>Tags:</h2>

                                <ul className='flex items-center flex-wrap ml-2'>

                                    {tags?.map((tag, idx) => (
                                        <li
                                            key={idx}
                                            className="text-base bg-orange-500 text-white border-2  rounded-md px-3 py-1 m-1"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>


                            <div className=''>
                                <h2 className='text-lg mb-4 font-semibold'>Ingredients</h2>
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                                    {meal?.ingredients?.map((ingredient, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center border-2 border-orange-500 bg-white p-2 rounded-md transition duration-300 ease-in-out hover:bg-orange-500 hover:border-white hover:text-white"
                                        >
                                            <span className='text-md'>{idx + 1}.</span>
                                            <span className='text-capitalize ml-2'>{ingredient}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className=''>
                        <div className='my-7'>
                            <h6 className='text-lg mb-3 ml-2 font-semibold'>Measure:</h6>
                            <ul className='grid grid-cols-1 lg:grid-cols-5 gap-5'>
                                {meal?.measures?.map((measure, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-end border-2 ml-2 border-black p-2 rounded-md transition duration-300 ease-in-out transform hover:bg-black hover:border-white hover:text-white"
                                    >
                                        <span className='text-orange'>
                                            <FaUtensilSpoon />
                                        </span>
                                        <span className='ml-2'>{measure}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='my-7'>
                            <h6 className='text-lg font-semibold mb-3'>Instructions:</h6>
                            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                {instructions?.map((instruction, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <AiOutlineCheckSquare size={18} className="text-orange-500 flex-shrink-0" />
                                        <span className='ml-2'>{instruction}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>



                    </div>
                </section>

            </div>
        </div>
    )
}

export default MealSingle;
