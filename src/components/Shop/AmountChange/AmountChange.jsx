import { useEffect, useState } from "react";
import { Btn, Buttons } from "./AmountChange.styled";
import { PropTypes } from "prop-types";

const Counter = ({ value = 1, onValueChange }) => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const handleClickIncrease = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    onValueChange(newCounter);
  };
  const handleClickDecrease = () => {
    if (counter > 1) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      onValueChange(newCounter);
    }
  };

  return (
    <>
      <Buttons>
        <Btn type="button" onClick={handleClickDecrease}>
          -
        </Btn>
        <p>{counter}</p>
        <Btn type="button" onClick={handleClickIncrease}>
          +
        </Btn>
      </Buttons>
    </>
  );
};

export default Counter;

Counter.propTypes = {
  value: PropTypes.number,
  onValueChange: PropTypes.func.isRequired,
};
