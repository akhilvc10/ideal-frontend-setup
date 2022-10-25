import React, { useState } from 'react';

export default function Stepper({ initial = 0, onClickIncrement }) {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <button aria-label="decrement" onClick={onClickIncrement}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button aria-label="increment" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
