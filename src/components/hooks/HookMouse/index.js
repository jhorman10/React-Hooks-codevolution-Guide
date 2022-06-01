import React, { useState, useEffect } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  //here we use useEffect to call the handleMouseMove function every time the mouse moves
  //the first argument is a function that will run when the component mounts and unmounts
  //the second argument is an array of dependencies, in this case we are passing in an empty array
  //the useEffect function will only run when the dependencies change
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('mousemove', handleMouseMove);

    //when useEffect has a return it works like componentWillUnmount
    //this is a cleanup function that will run when the component unmounts
    //this is a good place to remove event listeners
    //the return function will run when the component unmounts
    return () => {
      console.log('useEffect cleanup');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      Hooks X : {x}, Y : {y}
    </div>
  );
}

export default HookMouse;
