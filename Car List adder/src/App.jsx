/* eslint-disable react/no-unknown-property */

import { useState } from "react";

function App() {

    const [car,setCar] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");
    const [isHovered,setIsHovered] = useState(false);

    const handleCar = () => {
      const newCar = {
        year:carYear,
        make:carMake,
        model:carModel,
      }
      setCar( c => [...c,newCar]);

      // Reset the values after adding
      setCarYear(new Date().getFullYear())
      setCarMake("");
      setCarModel("");
    }
    const handleCarRemove = (index) => {
  
        setCar(c => c.filter((_,i)  => i !== index ))
    }
   const handleYear = (e) => setCarYear( e.target.value);
   const handleMake = (e) => setCarMake(e.target.value);
   const handleModel = (e) => setCarModel(e.target.value);

   function ListCreator() {
    return (
      <ul
        style={{
          width: 360,
          marginInline: "auto",
          fontSize: "1.8rem",
          color: "white",
          listStyle: "none",
        }}
      >
        {car.map((c, i) => (
          <li
            key={i}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              marginTop: 5,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {c.year} {c.make} {c.model}
            <i style={{ marginLeft: "auto" }}>
              <button
                onClick={() => handleCarRemove(i)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  display: isHovered ? 'block':'none'
                }}
              >
                <i
                  class="fa-solid fa-trash"
                  style={{
                    fontSize: "1.4rem",
                    cursor: "pointer",
                  }}
                ></i>
              </button>
            </i>
          </li>
        ))}
      </ul>
    );
   }
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem" }}>
        List of Car{" "}
      </h1>
       <ListCreator></ListCreator>
    
      <div
        style={{
          display: "flex ",
          flexDirection: "column",
          width: 400,
          marginInline: "auto",
        }}
      >
        <input
          type="number"
          style={{
            marginBlock: 5,
            height: 30,
            fontSize: 20,
            outline: "none",
            paddingLeft: 10,
          }}
          placeholder="Enter year"
          value={carYear}
          onChange={handleYear}
        />
        <input
          type="text"
          style={{
            marginBlock: 5,
            height: 30,
            fontSize: 20,
            outline: "none",
            paddingLeft: 10,
          }}
          placeholder="Enter car make"
          value={carMake}
          onChange={handleMake}
        />
        <input
          type="text"
          style={{
            marginBlock: 5,
            height: 30,
            fontSize: 20,
            outline: "none",
            paddingLeft: 10,
          }}
          placeholder="Enter car model"
          value={carModel}
          onChange={handleModel}
        />
        <button
          style={{
            marginBlock: 10,

            fontSize: 24,
            outline: "none",
            width: "100%",
            marginInline: "auto",
            backgroundColor: "rgba(0,0,0,0.6)",
            border: "none",
            color: "white",
            paddingBlock: "10px",
            cursor: "pointer",
          }}
          onClick={handleCar}
        >
          Add Car
        </button>
      </div>
    </div>
  );
}

export default App;
