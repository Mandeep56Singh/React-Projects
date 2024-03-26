import gsap from "gsap";
import React, { useState } from "react";

const MyApp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    review: "",
    payment: "",
    shipping: "Delivery",
  });


  const handleChange = (e) => {
    const {name,value} = e.target;
    setState(
      n => (
        {...n,
        [name]:value}
      )
    )
  };

  return (
    <div className="ml-6 mt-10 flex flex-col gap-4 w-11/12 overflow-hidden">
      <h1 className="text-2xl mx-2 ">
        Full Name : <i className="text-lg"> {state.name}</i>
      </h1>
      <input
        type="text"
        className="bg-blue-100 rounded-lg focus:outline-none pl-2 py-1"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Your Name..."
      />

      <div className="flex gap-4 w-full">
        <div className="w-1/2">
          <h1 className="text-2xl mx-2">
            Email : <i className="text-lg">{state.email}</i>
          </h1>
          <input
            type="email"
            className="bg-blue-100 rounded-lg focus:outline-none pl-2 py-1 w-full"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="w-1/2">
          <h1 className="text-2xl mx-2"> Ph : Number {state.number}</h1>
          <input
            type="number"
            className="bg-blue-100 rounded-lg focus:outline-none pl-2 py-1 w-full"
            name="number"
            value={state.number}
            onChange={handleChange}
          />
        </div>
      </div>

      <textarea
        name="review"
        cols="60"
        rows="2"
        placeholder="Please write your review"
        className="bg-blue-50 focus:outline-blue-100 p-4"
        value={state.review}
        onChange={handleChange}
      ></textarea>
      <pre className="text-wrap">
        Your Review : <br />
        {state.review}
      </pre>

      <h1 className="text-2xl">Select the Payment Method</h1>
      <select
        name="payment"
        value={state.payment}
        onChange={handleChange}
        className="bg-blue-200 rounded-lg p-1 focus:outline-blue-300"
      >
        <option value="">Select the option</option>
        <option value="Net Banking">Net Banking</option>
        <option value="UPI">UPI</option>
        <option value="Visa">Visa</option>
      </select>
      <p>Your selected Payment Method : {state.payment}</p>

      <h1 className="text-2xl ">How you want to receive product</h1>
      <div onChange={handleChange}>
        <label htmlFor="pickUp" className="text-xl ">
          <input
            type="radio"
            name="shipping"
            value="Pick Up"
            checked={state.shipping === "Pick Up"}
            className="mr-4 size-4"
          />
          Pick Up
        </label>
        <br />
        <label htmlFor="delivery" className="text-xl ">
          <input
            type="radio"
            name="shipping"
            value="Delivery"
            checked={state.shipping === "Delivery"}
            className="mr-4 size-4"
          />
          Delivery
        </label>
      </div>
      <p className="mt-4"> Shipping : {state.shipping}</p>
    </div>
  );
};

export default MyApp;
