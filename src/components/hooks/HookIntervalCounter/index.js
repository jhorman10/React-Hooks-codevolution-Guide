import React, { useEffect, useState } from 'react';

function HookIntervalCounter() {
  const [count, setCount] = useState(0);
  const [someProp] = useState('someProp'); //I used someProp for work it in the example

  const tick = () => {
    // use the second way to set the state for not set the state from the array dependencies
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // if you want to update using an array of parameter you must use it inside the useEffect
    function doSomething(someProp) {
      console.log(someProp);
    }
    doSomething();
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [someProp]);

  return <h2>Hook: {count}</h2>;
}

export default HookIntervalCounter;
