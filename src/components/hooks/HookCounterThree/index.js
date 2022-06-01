import React, { useState } from 'react';

function HookCounterThree() {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });

  //use the spread operator for merge the prev state with the new state
  //because hooks don't merge the states

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2> Your first name is: {name.firstName}</h2>
      <h2> Your last name is: {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounterThree;
