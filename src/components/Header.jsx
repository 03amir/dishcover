import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";

function Header() {
    return (

        <div className="flex items-center w-90% lg:w-3/5 m-auto justify-between my-4 lg:my-9 p-4">

            {/* Logo with Link */}
            {/* <Link to="/"> */}
            <div className="flex items-center cursor-pointer hover:text-red-500 transition duration-300">
                <IoFastFoodOutline className="text-5xl lg:text-6xl" />
            </div>
            {/* </Link> */}

            <div className="flex flex-row items-center justify-around lg: w-1/2">
                {/* Search */}
                <div className="cursor-pointer opacity-70 flex items-center justify-between gap-1 hover:text-red-500 transition duration-300">
                    <GoSearch className="text-xl lg:text-2xl" /> <p className="hidden lg:inline">Search</p>
                </div>

                {/* Offers */}
                <div className="cursor-pointer opacity-70 flex items-center justify-between gap-1 hover:text-red-500 transition duration-300">
                    <MdOutlineLocalOffer className="text-xl lg:text-2xl" /> <h2 className="hidden lg:inline">Offers</h2>
                </div>

                {/* Cart */}
                <div className="cursor-pointer opacity-70 flex items-center justify-between gap-1 hover:text-red-500 transition duration-300">
                    <BsCart2 className="text-xl lg:text-2xl" /> <h2 className="hidden lg:inline">Cart</h2>
                </div>
            </div>

        </div>
    );
}

export default Header;
