import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from '../stores/sidebarSlice';
import { useEffect, useState } from "react";
import { GrClose } from 'react-icons/gr';


const SideBar = () => {
    
    const isSidebarOpen = useSelector(state => state.sidebar.isOpen);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategoris();
    }, []);

    async function getCategoris() {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await res.json();
        setCategories(data.categories);
    }

    const dispatch = useDispatch();

    const closeSidebar = () => {
        dispatch(closeSideBar());
    };

    if (!isSidebarOpen) return null;

    return (
        <div className="fixed inset-0 overflow-hidden z-50" onClick={closeSidebar}>

            <div className="flex items-center justify-end h-screen">

                <div className="w-[18vw] bg-orange-500 text-blackshadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out h-full overflow-y-auto">

                    <div className="flex justify-start p-4 mt-3">
                        <GrClose className="text-white text-2xl hover:text-black cursor-pointer" onClick={closeSidebar} />
                           
                    </div>

                    <div >
                        <ul >
                            {categories?.map(category => (
                                <li
                                    className="text-white p-4 hover:text-black cursor-pointer transition duration-300"
                                    key={category.idCategory}
                                >
                                    <Link
                                        to={`/category/${category.strCategory}`}
                                        onClick={closeSidebar}
                                    >
                                        {category.strCategory}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SideBar;
