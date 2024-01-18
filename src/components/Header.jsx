import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {useDispatch , useSelector} from 'react-redux'

function Header() {

    const {data} = useSelector((state)=>state.cart);

    return (

        <div className="flex items-center w-90% lg:w-3/5 m-auto justify-between my-4 lg:my-9 p-4">


            <div className="flex items-center cursor-pointer hover:text-red-500 transition duration-300">
                <IoFastFoodOutline className="text-5xl lg:text-6xl" />
            </div>


            <div className="flex flex-row items-center justify-around lg: w-1/2">
                {/* Search */}
                <div className="cursor-pointer opacity-70 flex items-center justify-between gap-1 hover:text-red-500 transition duration-300">
                    <GoSearch className="text-xl lg:text-2xl" /> <p className="hidden lg:inline">Search</p>
                </div>

                {/* Offers */}
                <div className="cursor-pointer opacity-70 flex items-center justify-between gap-1 hover:text-red-500 transition duration-300 relative">
                    <BsCart2 className="text-xl lg:text-2xl" />
                    {data?.length > 0 && (
                        <span className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                            {data?.length}
                        </span>
                    )}
                    <h2 className="hidden lg:inline">Saved</h2>
                </div>


                {/* Cart */}
                <div className="cursor-pointer opacity-70 flex items-center justify-between gap-1 hover:text-red-500 transition duration-300">
                    <GiHamburgerMenu className="text-xl lg:text-2xl" /> <h2 className="hidden lg:inline">Menu</h2>
                </div>
            </div>

        </div>
    );
}

export default Header;
