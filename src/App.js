import "./App.css";
import React, { useState } from "react";
import ControlBar from "./components/ControlBar";
import ArrayDisplay from "./components/ArrayDisplay";

function App() {
  const generateArray = (size) => {
    let array = [];

    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * 90 + 1));
    }

    return array;
  };

  const [speed, setSpeed] = useState(250);
  const [arraySize, setArraySize] = useState(25);
  const [array, setArray] = useState(generateArray(arraySize));
  const [sortingAlgorithm, setSortingAlgorithm] = useState("bubbleSort");
  const [comparing, setComparing] = useState([-1, -1]);
  const [inOrder, setInOrder] = useState([-1, -1]);
  const [order, setOrder] = useState([-1, -1]);
  const [sorting, setSorting] = useState(false);

  return (
    <div className="App">
      <ControlBar
        setArray={setArray}
        array={array}
        generateArray={generateArray}
        setArraySize={setArraySize}
        arraySize={arraySize}
        setSpeed={setSpeed}
        speed={speed}
        setSortingAlgorithm={setSortingAlgorithm}
        sortingAlgorithm={sortingAlgorithm}
        setComparing={setComparing}
        setInOrder={setInOrder}
        setOrder={setOrder}
        order={order}
        setSorting={setSorting}
        sorting={sorting}
      />
      <ArrayDisplay
        array={array}
        comparing={comparing}
        inOrder={inOrder}
        order={order}
      />
    </div>
  );
}

export default App;
