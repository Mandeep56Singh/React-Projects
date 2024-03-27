import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState(["apple", "mango", "banana"]);
  const [fruitCount, setFruitCount] = useState(3);
  const totolFruits = 7;
  const [filters, setFilters] = useState({
    sortAlphabetically:false
  });

 const handleAddFruit = () => {
   const val = document.getElementById("fruit1").value;
   document.getElementById("fruit1").value = "";
   const checkFruit = fruits.map((fruit) => fruit.toLowerCase());
    
   if (!checkFruit.includes(val.toLowerCase()) && fruits.length < totolFruits) {
setFruits((f) => {
      const newFruits = [...f, val];
      if (filters.sortAlphabetically) {
        newFruits.sort((a, b) => a.localeCompare(b));
      }
      // handle other filters
      return newFruits;
    });
     setFruitCount((f) => f + 1);
   } else if  (checkFruit.includes(val.toLowerCase())) {
     alert("fruit already exist");
   } 
   else if (!fruits.length < totolFruits) {
     alert("Can't add more fruits ");
   }

 };

  const handleEmptyBasket = () => {
    return fruits.length === 0 ? <h1>add something to basket</h1> : null;
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddFruit();
    }
  };
  const handleRemoveFruit = (fruitR) => {
    handleEmptyBasket();
    setFruits((fruits) => fruits.filter((fruit) => fruit !== fruitR));

    setFruitCount((f) => f - 1);
  };
  const handleClearAll = () => {
    setFruits([]);
    setFruitCount(0);
  };
const handleFilter = (e) => {
   const filter = e.target.value;
  if (filter === "Sort Alphabetically") {
    const sortedArray = [...fruits].sort((a, b) => a.localeCompare(b));
    setFruits(sortedArray);
    setFilters((f) => ({ ...f, sortAlphabetically: true }));
  } else {
    setFilters((f) => ({ ...f, sortAlphabetically: false }));
  }
};


//  JSX Elements 
  const BasketEmpty = () => {
    return fruits.length === 0 ? (
      <p className="text-2xl text-center mt-5">Add some fruits to basket</p>
    ) : null;
  };

  const LeftFruits = () => {
    return fruits.length !== 0 && totolFruits - fruitCount > 0 ? (
      <p className="text-2xl text-center mt-5">
        {totolFruits - fruitCount} more fruits can be placed
      </p>
    ) : null;
  };
  const BasketFull = () => {
    return fruits.length === totolFruits ? <p className="text-2xl text-center mt-5"> Basket is full</p> : null;
  }
  return (
    <div className="m-10">
      <h1 className="text-4xl text-center">Fruit Basket</h1>

      <BasketEmpty />
      <LeftFruits />
      {/* {fruits.length === totolFruits && (
        <p className="text-2xl text-center mt-5"> Basket is full</p>
      )} */}
      <BasketFull />

      <ul className="mt-10">
        {fruits.map((fruit, index) => (
          <li key={index} className="mt-1 text-2xl flex">
            <span className="w-1/2"> {fruit}</span>

            <span
              className="ml-10 text-2xl cursor-pointer"
              onClick={() => {
                handleRemoveFruit(fruit);
              }}
            >
              ×
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="which fruit next ?"
          className="p-3 bg-gray-200 placeholder:text-gray-600 placeholder:text-xl text-xl  rounded-xl focus:outline-gray-400"
          id="fruit1"
        />
        <button
          className="bg-gray-300 py-3 px-4 rounded-xl ml-2 text-xl text-gray-900"
          onClick={handleAddFruit}
        >
          ADD
        </button>
      </div>

      <select
        name="filters"
        id="filters"
        className="bg-gray-300 py-3 px-4 rounded-xl text-xl text-gray-900 mt-4 focus:outline-gray-400"
        onChange={handleFilter}
      >
        <option value="">filters</option>
        <option value="Sort Alphabetically">Sort Alphabetically</option>
      </select>

      <button
        className="bg-gray-300 py-3 px-4 rounded-xl ml-2 text-xl text-gray-900 mt-4"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
