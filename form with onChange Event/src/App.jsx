import gsap from "gsap";
import React, { useState } from "react";
const MyApp = () => {
  const [name,SetName] = useState('');
  const [email,SetEmail] = useState('');
  const [number,Setnumber] = useState('');
  const [review,SetReview] = useState('');
  const [payment,SetPayment] = useState('');
  const [shipping,SetShipping] = useState('Delivery');
 
 const handleChangeFullName = (e) => {
  SetName(e.target.value)
 };
 const handleChangeEmail= (e) => {
  SetEmail(e.target.value)
 };
 const handleChangeNumber = (e) => {
  Setnumber(e.target.value)
 };
 const handleChangeReview = (e) => {
  SetReview(e.target.value)
 };
 const handleChangePayment = (e) => {
  SetPayment(e.target.value)
 };
 const handleChangeShipping = (e) => {
  SetShipping(e.target.value);
 };
 

 
  return (
    <div className="ml-6 mt-10  flex flex-col gap-4 w-11/12 overflow-hidden">
      <h1 className="text-2xl mx-2 ">
        Full Name : <i className="text-lg"> {name}</i>
      </h1>
      <input
        type="text"
        className="bg-blue-100 rounded-lg focus:outline-none pl-2 py-1  "
        name="fullName"
        value={name}
        onChange={handleChangeFullName}
        placeholder="Your Name..."
      />

      <div className="flex gap-4 w-full">
        <div className="w-1/2">
          <h1 className="text-2xl mx-2  ">
            Email : <i className="text-lg">{email}</i>
          </h1>
          <input
            type="email"
            className="bg-blue-100 rounded-lg focus:outline-none pl-2 py-1  w-full"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <div className="w-1/2">
          <h1 className="text-2xl mx-2  "> Ph : Number {number}</h1>
          <input
            type="number"
            className="bg-blue-100 rounded-lg focus:outline-none pl-2 py-1 w-full  "
            name="number"
            value={number}
            onChange={handleChangeNumber}
          />
        </div>
      </div>

      <textarea
        name="review"
        id=""
        cols="60"
        rows="5"
        placeholder="Please write your review"
        className="bg-blue-50 focus:outline-blue-100 p-4"
        onChange={handleChangeReview}
      ></textarea>
      <pre className="text-wrap">
        Your Review : <br />
        {review}
      </pre>

      <h1 className="text-2xl">Select the Payment Method</h1>
      <select
        name="payment"
        value={payment}
        onChange={handleChangePayment}
        className="bg-blue-200 rounded-lg p-1 focus:outline-blue-300"
      >
        <option value="">Select the option</option>
        <option value="Net Banking">Net Banking</option>
        <option value="UPI">UPI</option>
        <option value="Visa">Visa</option>
      </select>
      <p>Your selected Payment Method : {payment}</p>

      <h1 className="text-2xl ">How you want to recieve product</h1>
      <label htmlFor="pickUp" className="text-xl " onChange={handleChangeShipping}>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          className="mr-4 size-4"
        />
        Pick Up
         <br />
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          className="mr-4 size-4"
        />
        Delivery
      </label>
      <p className="mt-4"> Shipping : {shipping}</p>
    </div>
  );
};

export default MyApp;
