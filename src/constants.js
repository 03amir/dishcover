export const sliderLimit = 4;
export const smallSliderLimit = 1;

export const base_url = "https://www.themealdb.com/api/json/v1/1/";

export const CATEGORIES_URL = 'categories.php';
export const MEAL_CATEGORIES_URL = "filter.php?c=";
export const MEAL_SINGLE_URL = "lookup.php?i=";
export const SEARCH_URL = "search.php?s=";

export const mockSuggestions = [
    "Pizza",
    "Burger",
    "Pasta",
    "Salad",
    "Chicken",
    "Sushi",
    "Steak",
    "Tacos",
    "Soup",
    "Sandwich",
    "Curry",
    "Risotto",
    "Shrimp Scampi",
    "Lasagna",
    "Burrito",
    "Pad Thai",
    "Fish and Chips",
    "Ceviche",
    "Dumplings",
    "Gyoza",
    "Enchiladas",
    "Fajitas",
    "Miso Soup",
    "Stir Fry",
    "Ramen",
    "Chow Mein",
    "Calzone",
    "Goulash",
    "Sashimi",
    "Paella",
    "Carbonara",
    "Eggplant Parmesan",
    "Falafel",
    "Hummus",
    "Casserole",
    "Kebab",
    "Pho",
    "Fried Rice",
    "Meatloaf",
    "Jambalaya",
    "Mac and Cheese",
    "Peking Duck",
    "Gyudon",
    "Cobb Salad",
    "Shawarma",
    "Tandoori Chicken",
    "Clam Chowder",
    "Moussaka",
    "Bruschetta",
    "Hot Dog",
    "Quiche",
    "Nachos",
    "Chicken Tikka Masala",
    "Ratatouille",
    "Hamburger",
    "Tom Yum Goong",
    "Beef Stroganoff",
    "Gumbo",
    "Tomato Soup",
    "Poutine",
    "Chili Con Carne",
    "Tiramisu",
    "Creme Brulee",
    "Banana Bread",
    "Cheesecake",
    "Chocolate Fondue",
    "Pancakes",
    "Waffles",
    "French Toast",
    "Muffins",
    "Bagels",
    "Croissants",
    "Cinnamon Rolls",
    "Donuts",
    "Apple Pie",
    "Key Lime Pie",
    "Strawberry Shortcake",
    "Ice Cream",
    "Frozen Yogurt",
    "Sorbet",
    "Cupcakes",
    "Brownies",
    "Chocolate Chip Cookies",
    "Pumpkin Pie",
    "Fruit Salad",
    "Smoothies",
    "Milkshakes",
    "Mocktails",
    "Cocktails",
    "Wine",
    "Beer",
    "Sake",
    "Margaritas",
    "Moscow Mule",
    "Sangria",
];

export const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
        ? []
        : mockSuggestions.filter((item) =>
            item.toLowerCase().includes(inputValue)
        );
};
