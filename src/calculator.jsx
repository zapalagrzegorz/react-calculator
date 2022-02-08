import React, { useState } from "react";

export default function Calculator() {
  const [inputFirst, setInputFirst] = useState("");
  const [inputSecond, setInputSecond] = useState("");
  const [result, setResult] = useState(0);

  const changeNumFirst = (e) => {
    setInputFirst(e.target.value);
  };

  const changeNumSecond = (e) => {
    setInputSecond(e.target.value);
  };

  const clearInputs = () => {
    setInputFirst("");
    setInputSecond("");
  };

  const validate = (numFirst, numSecond) => {
    if (Number.isNaN(numFirst) || Number.isNaN(numSecond)) {
      return false;
    }
    return true;
  };

  const operate = (e, operation) => {
    e.preventDefault();
    const numFirst = parseFloat(inputFirst);
    const numSecond = parseFloat(inputSecond);

    if (!validate(numFirst, numSecond)) {
      setResult("Error");
    }

    switch (operation) {
      case "+":
        setResult(numFirst + numSecond);
        break;
      case "-":
        setResult(numFirst - numSecond);
        break;
      case "*":
        setResult(numFirst * numSecond);
        break;
      case "/":
        setResult(numFirst / numSecond);
        break;
      default:
        setResult("Error");
        break;
    }
  };
  return (
    <div>
      <div>
        <pre>{Number.isSafeInteger(result) ? result : result.toFixed(3)}</pre>
      </div>
      <input
        type="number"
        name="numFirst"
        value={inputFirst}
        onChange={changeNumFirst}
      />
      <input
        type="number"
        name="numFirst"
        value={inputSecond}
        onChange={changeNumSecond}
      />
      <button type="reset" onClick={clearInputs}>
        Clear
      </button>
      <div className="operation">
        <button type="button" onClick={(e) => operate(e, "+")}>
          +
        </button>
        <button type="button" onClick={(e) => operate(e, "-")}>
          -
        </button>
        <button type="button" onClick={(e) => operate(e, "*")}>
          *
        </button>
        <button type="button" onClick={(e) => operate(e, "/")}>
          /
        </button>
      </div>
    </div>
  );
}
