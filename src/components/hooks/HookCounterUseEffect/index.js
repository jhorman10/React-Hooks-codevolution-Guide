import React, { useState, useEffect } from 'react';

function HookCounterUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  //ComponentDidMount
  useEffect(() => {
    console.log('useEffect - Updating document...');
    document.title = `You clicked ${count} times`;
  }, [count]);

  //ComponentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default HookCounterUseEffect;
