import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import ProgressTracker from "./ProgressTracker.jsx";
import TaskContainer from "./TaskContainer.jsx";
import Todo from "./Todo.jsx";
import Header from "./header.jsx";
import "./index.css";
import SearchBar from "./searchBar.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex flex-col gap-4 mx-4 md:gap-6 lg:mx-8  xl:mx-auto xl:w-[1210px]">
      <Header></Header>
      <SearchBar></SearchBar>
      <ProgressTracker></ProgressTracker>
      <TaskContainer></TaskContainer>       
    </div>
  </React.StrictMode>
);
