import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState(["apple", "mango", "banana"]);
  const [fruitCount, setFruitCount] = useState(3);
  const totolFruits = 7;

  const handleAddFruit = () => {
    const val = document.getElementById("fruit1").value;
    document.getElementById("fruit1").value = "";
    const checkFruit = fruits.map((fruit) => fruit.lowercase);
    if (!checkFruit.includes(val.lowercase)) {
      setFruits((f) => [...f, val]);
      setFruitCount((f) => f + 1);
    } else {
      alert("fruit already exist");
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
