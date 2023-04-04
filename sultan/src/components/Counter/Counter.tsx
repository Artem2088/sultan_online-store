import React, { FC, useState, useEffect } from "react";
import "./Counter.css";

interface IPropsCounter {
  setCount: any;
}

const Counter: FC<IPropsCounter> = ({ setCount }) => {
  const [countEach, setCountEach] = useState<number>(0);

  useEffect(() => {
    setCount(countEach);
  }, [countEach]);

  const increment = () => {
    if (countEach < 1) {
      return;
    }
    setCountEach(countEach - 1);
  };
  const decrement = () => {
    setCountEach(countEach + 1);
  };

  return (
    <>
      <div className='counter__count'>
        <button
          className='counter__increment'
          type='button'
          onClick={() => increment()}
        >
          -
        </button>
        <span className='counter__value'>{countEach}</span>
        <button
          className='counter__decrement'
          type='button'
          onClick={() => decrement()}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
