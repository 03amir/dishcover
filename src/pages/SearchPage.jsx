import { useState } from "react";
import { base_url, SEARCH_URL, getSuggestions } from "../constants";
import Meal from "../components/Meal";


const SearchPage = () => {

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [noMealsMessage, setNoMealsMessage] = useState("");


  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setSuggestions(getSuggestions(value));
  };

  const handleSearch = async () => {
    const trimmedSearchValue = searchValue.trim();

    if (trimmedSearchValue !== "") {
      const res = await fetch(`${base_url}${SEARCH_URL}${trimmedSearchValue}`);
      const data = await res.json();

      const meals = data.meals || [];
      setSearchData(meals);

      if (meals.length === 0) {
        setNoMealsMessage("No such meals found.");
      } else {
        setNoMealsMessage("");
      }
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="m-auto my-8 min-h-[48vh]">
      <div className="w-3/5 m-auto mx-auto p-2 bg-white rounded-md">
        <div className="flex items-center pb-2 mb-4">
          <input
            type="text"
            placeholder="Search for meals..."
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={handleEnterKey}
            className="flex-grow outline-none px-3 py-2 border-2 border-orange-500 rounded-md text-gray-700 font-semibold"
          />
          <button
            className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-orange-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {suggestions.length > 0 && (
          <ul className="list-none p-0 m-0 mt-2 bg-gray-100 rounded-md border border-gray-300">
            {suggestions.slice(0, 10).map((item, index) => (
              <li
                key={index}
                className="border-b cursor-pointer px-4 py-3 font-semibold transition duration-300 hover:bg-orange-400"
                onClick={() => {
                  setSearchValue(item);
                  setSuggestions([]);
                  handleSearch();
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4">
        {noMealsMessage ? (
          <p className="text-center text-gray-600">{noMealsMessage}</p>
        ) : (
          <Meal meals={searchData} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
