What are side Effects/Effects in reacts ?

Side effects in React are operations that interact with the outside world from within a function. They can affect other components, can’t be done during rendering, and don’t involve the component’s local state or React’s diffing algorithm

Examples are

1. Data Fetching and asynchronous operations : This is the most common side effect. Fetch data from an API and then use that data in your component using async function.

2. Manipulating the DOM: If you’re manually changing the DOM, outside of what React normally handles for you, this is considered a side effect.

3. Timers: If you’re using setTimeout or setInterval, these also count as side effects.They are part of Javascript but provided by browser.

4. Writing to Local Storage: If you’re using the Web Storage API to store data in the user’s browser, this is a side effect.

5. Messaging to console : It is also a side effects. Because it interact browser's console which is outside the scope of react.

6. Subscriptions and Observable : An Observable is like a data stream that can emit values over time, and when you subscribe to an Observable, you’re setting up a listener that will react whenever new data is emitted from that Observable. This pattern is very useful in many scenarios in React and other JavaScript frameworks, especially when dealing with asynchronous data.

What problem can side effects create in react .

look at this code : code c1

import React, { useState } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch('https://api.example.com');
    const data = await response.json();
    setData(data);
  };

  fetchData();

  // render data
  return <div>{JSON.stringify(data)}</div>;
}

The above code will make network request each time our component re-renders , however here the data from request will be same so only one time fetching should be done . 
Also there are chances that if you try to update the component's state (state variable) after the component is unmounted (removed from the dom);

When we say a component “unmounts”, it means the component is being removed from the DOM, or in other words, it’s no longer visible on the screen1. This could happen for a variety of reasons, such as a conditional rendering no longer being met, a user navigating away from the page where the component is rendered, or some other change in your app’s state or props that leads to the component being removed.

------------------- useEffect hooks ----------------------

useEffect is a React Hook that lets you perform side effects in your functional components.  It runs after the component has rendered, and can be used to handle side effects. 

It also provides a cleanUp mechanism in which you can cancel any ongoing async request when the component unmounts. 

So in the example code c1 above , we can use useEffect hook to prevent multiple network calls.

 syntax : According to react.dev
 useEffect(setup,[dependencies])

 setup is a function that will executed after every render of the component . 
 It can optionally returns a cleanup functions  which will run before the component unmounts or before the effect is run again with new dependencies. 

 Dependencies(optional) : This is array of values that the effect depends on . Based on it you can decide when to run you setup function . 

 when no dependencies array provided : 
 useEffect ( () => {}) 
 The function i.e setup will run on every render of the component

 When empty array of dependencies provided : 
 useEffect ( () => {},[]) 
 The function will run only after initial mounting of component or only on first rendering of component. 

 When values in dependencies is provided : 
 useEffect ( () => {},[val1,val2,....])
 The function will run on mounting of component or when the values inside array changes


watch this video for more understanding : 
https://youtu.be/0ZJgIjIuY7U?si=X6_vcu59C5YQ9HdP
 

 
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  // render data
  return <div>{JSON.stringify(data)}</div>;
}

so only one network request would happen.


More on cleaning function  , We had discuss above . 

The cleanup function is called in two scenarios:

Before the component unmounts: This is to ensure that any resources that were set up in the effect are properly cleaned up before the component is removed from the DOM.

Before re-running the effect: If the dependencies of the effect change, the cleanup function is called before the effect is run again with the new dependencies.

The cleanup function is important for preventing memory leaks and other issues. For example, if your effect sets up a subscription or starts a timer, you should clean up these resources by cancelling the subscription or clearing the timer in the cleanup function.

Here’s an example of how you might use a cleanup function in useEffect:

useEffect(() => {
  const timer = setTimeout(() => {
    console.log('This will run after 1 second');
  }, 1000);

  return () => {
    clearTimeout(timer);
    console.log('Cleanup function');
  };
}, []);

In this example, the effect sets up a timer that logs a message after 1 second. The cleanup function clears the timer. If the component unmounts before the timer fires, or if the effect is run again due to a change in dependencies, the cleanup function will clear the timer, preventing the message from being logged


How to fetch Data using useEffect hook  : 

import React, { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
  const abortController = new AbortController();

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data', { signal: abortController.signal });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        setError(error.message);
      }
    }
  };

  fetchData();

  return () => {
    abortController.abort();
  };
}, []);
// Empty dependency array means this effect runs once on mount and cleanup on unmount

  if (error) {
    return <div>Error: {error}</div>;
  }

  return data ? (
    <div>
      {/* Render your data here */}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Example;


AbortController is created at the start of the useEffect. The signal from this AbortController is passed to the fetch call to allow the request to be aborted. In the cleanup function, abortController.abort() is called to abort the fetch request when the component is unmounted.
