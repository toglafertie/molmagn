import React, { useState } from 'react';

const MyComponent = () => {
  const [myObject, setMyObject] = useState({ key1: 'value1', key2: 'value2' });

  const updateValue = () => {
    setMyObject({ ...myObject, key1: 'newValue' });
  };

  return (
    <div>
      <p>Key 1: {myObject.key1}</p>
      <p>Key 2: {myObject.key2}</p>
      <button onClick={updateValue}>Update Value</button>
    </div>
  );
};
