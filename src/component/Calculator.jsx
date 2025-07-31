import React, { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const handleA = (e) => {
    setA(e.target.value);
  };

  const handleB = (e) => {
    setB(e.target.value);
  };

  const handleAdd = () => {
    setResult(Number(a) + Number(b));
  };

  const handleSub = () => {
    setResult(Number(a) - Number(b));
  };

  const handleMul = () => {
    setResult(Number(a) * Number(b));
  };

  const handleDiv = () => {
    if (Number(b) === 0) {
      setResult("Cannot divide by 0");
    } else {
      setResult(Number(a) / Number(b));
    }
  };

  return (
    <div className="App1">
      <h1 className="hed">Hello I am calculator</h1>

      <input
        type="number"
        name="a"
        placeholder="Enter value A"
        value={a}
        onChange={handleA}
      />

      <input
        type="number"
        name="b"
        placeholder="Enter value B"
        value={b}
        onChange={handleB}
      />

      <input
        type="text"
        name="result"
        placeholder="Result"
        readOnly
        value={result}
      />

      <br />

      <button id="cb1" onClick={handleAdd}>Add</button>
      <button id="cb1" onClick={handleSub}>Subtract</button>
      <button id="cb1" onClick={handleMul}>Multiply</button>
      <button id="cb1" onClick={handleDiv}>Divide</button>
    </div>
  );
}
