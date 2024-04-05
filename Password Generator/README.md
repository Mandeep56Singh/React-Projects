

##_________________useCallback()________________##

-------Problem--------------

Suppose you've PARENT COMPONENT and contains a CHILD COMPONENT .
The parent component contains some function which is passes to child component as props.

What's the problem here ?
Whenever parent re-renders the function which will be re-created , child component would think "i got a new function as props" so it will be re-render.
But if no values inside the function changes or function gives same output then child component would re-render unnecessary.

So the is problem is not "re-creation of function when no value changes (it accept or give)"  but re-rendering of child component that is accept this function .
It can cause performace issue . 

------- Solution ----------
If there would be a way to tell the react to not re-create function if no dependecies(values on which function dependent) changes for funtion, then this would solve our problem. 
This could be done by  caching the function .So react would fetches the result directly from chache on no changes in dependencies. This is called as memoization.

But what if the  of function does change . So re-creating of function should be done because child would not get the same result as previous. So there should be a way to re - create the function on changing of dependencies . 

what would happen to memoization on change in dependencies ?
React would compare the new dependencies with previous values each time the component re-renders . if any dependency(argument of functions) has changed , a new function would be created and memoized. If no dependencies have changed, React skips creating a new function and uses the memoized version instead.

Here how memoization works 

    You create a function inside a component and wrap it with useCallback, providing a list of dependencies.

    On the initial render, React memoizes (or “remembers”) this version of the function.
    
    On each subsequent render, React checks if any dependencies have changed compared to their values during the last render.

    If no dependencies have changed, React skips creating a new function and uses the memoized version instead.

    If any dependency has changed, React creates a new version of the function and memoizes it. This new version of the function will be used until the dependencies change again.


We need two things 
 - memoize the function 
 - re-create the function on change in dependencies

This is all is done by useCallback hook 

Defination : useCallback hook is a built-in react hook that memoize callback function to prevent it from re-created again and again if no dependencies changes. It is mostly used for increasing performance of your application.

Syntax : 
    useCallback(function,dependencies);

    

here how you would use it 

const fnc = useCallback(
  (args) => {
    //action goes in here	
  },
  [dependencies] 
);

    The first argument is the function you want to memoize.

    The second argument is an array of dependencies. The elements in this array are the values on which the function to be memoized depends. If any of these values change, the function will be recreated.

Some other use cases

---------- Memoizing the event handler ----------- :
useCallback can be used to memoize event handlers or other functions that are used in the component’s logic. Here’s an example:
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

-------With function that relies on external data or state-----
 If a function relies on external data or state, useCallback can be used to ensure that the function is only recreated when its dependencies change. Here’s an example:

const MyComponent = ({ value }) => {
  const [count, setCount] = useState(0);

  const incrementIfValue = useCallback(() => {
    if (value > 0) {
      setCount(count + 1);
    }
  }, [count, value]);

  return <button onClick={incrementIfValue}>Increment if value > 0</button>;
};

  return <button onClick={increment}>Increment</button>;
};



Disadvantages : 

Complex code: While this hook can help you create memoized functions, it can as well make your code complex. You must strike a balance between the usage of the hook and the complexity it adds to your code. Hence, only use the hook only when you need to memoize an expensive function which needs to be passed down to children components as a prop.

Excessive memory usage: If you do not use the useCallbck hook properly, it can lead to excessive memory usage. For instance, if a memoized function holds onto references to objects or variables that are no longer needed, those resources may not be freed up by garbage collection and could use more memory than needed.
Referals 

Changing dependencies everytime : if you're function's depedency are changing at every renders don't memoize it . It will degrade the perfomance , Because every re-render react would compare the stages, cache the function and run the function. so it will consume more time. Use it when your dependencies changes does not change much.

useCallback blog 
https://semaphoreci.com/blog/react-usecallback-hook



useMemo :
https://www.freecodecamp.org/news/memoization-in-javascript-and-react/


