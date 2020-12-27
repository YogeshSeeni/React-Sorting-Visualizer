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
  
  const [speed, setSpeed] = useState(50);
  const [arraySize, setArraySize] = useState(10);
  const [array, setArray] = useState(generateArray(arraySize));
  const [sortingAlgorithm, setSortingAlgorithm] = useState("bubbleSort");
  const [comparing, setComparing] = useState([-1,-1]);
  const [inOrder, setInOrder] = useState([-1,-1]);
  const [order, setOrder] = useState([-1,-1]);

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
      />
      <ArrayDisplay array={array} comparing={comparing} inOrder={inOrder} order={order}/>
    </div>
  );
}

export default App;