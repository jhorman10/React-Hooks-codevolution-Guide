import React, { useState } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);

  //use arrow function to avoid binding and execute the function setCount immediately

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default HookCounter;
