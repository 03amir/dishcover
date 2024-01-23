import { IoFastFoodOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";

export default function Footer() {
  return (
    <>
      <div className="sm:w-4/5 m-auto sm:my-10  my-0 sm:p-4 p-10 flex flex-wrap items-start justify-between md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 ">
           <div className="mb-4 sm:mb-8">
          <h1 className="text-base sm:text-lg lg:text-lg font-bold mb-2 sm:mb-4 hover:text-gray-500 transition duration-300">
            COMPANY
          </h1>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Who we are
          </h2>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Work with us
          </h2>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Contact Us
          </h2>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Investor Relations
          </h2>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Report Fraud
          </h2>
        </div>

        <div className="mb-4 sm:mb-8">
          <h1 className="text-base sm:text-lg lg:text-lg font-bold mb-2 sm:mb-4 hover:text-gray-500 transition duration-300">
            AMIRVERSE
          </h1>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Feeding India
          </h2>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Ride with us
          </h2>
        </div>

        <div className="mb-4 sm:mb-8">
          <h1 className="text-base sm:text-lg lg:text-lg font-bold mb-2 sm:mb-4 hover:text-gray-500 transition duration-300">
            FOR RESTAURANTS
          </h1>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Partner With Us
          </h2>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Apps For You
          </h2>
        </div>

        <div className="mb-4 sm:mb-8">
          <h1 className="text-base sm:text-lg lg:text-lg font-bold mb-2 sm:mb-4 hover:text-gray-500 transition duration-300">
            LEARN MORE
          </h1>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Privacy
          </h2>
          <h2 className="text-xs sm:text-md hover:text-gray-500 transition duration-300">
            Security
          </h2>
          <h2 className="text-sm sm:text-base hover:text-gray-500 transition duration-300">
            Terms
          </h2>
        </div>
      </div>


      <hr className="sm:w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/2 2xl:w-1/3 m-auto" />

      <div className="flex w-4/5 sm:w-3/5 md:w-3/5 lg:w-3/5 m-auto mt-4 mb-5 items-center justify-between">
        <IoFastFoodOutline className="text-4xl sm:text-6xl hover:text-gray-500 transition duration-300" />

        <p className="font-bold text-gray-500 sm:hidden md:block lg:inline">
          2024 @amir03
        </p>
        <div className="flex items-center justify-around gap-5">
          <SlSocialLinkedin className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-500 transition duration-300" />
          <LuGithub className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-500 transition duration-300" />
        </div>
      </div>
    </>
  );
}
