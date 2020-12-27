const swap = (array, num1, num2) => {
    let tmp = array[num1];
    array[num1] = array[num2];
    array[num2] = tmp;
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const bubbleSort = async (array, setArray, setComparing, setInorder, setOrder, speed) => {
    let sorted_array = [...array];
    let sorted = true;
    const slowest_time = 500;

    while (sorted) {
      sorted = false;
      for (let i = 0; i < sorted_array.length; i++) {
        console.log(speed);
        setOrder([-1,-1]);
        setComparing([i, i+1]);
        await sleep(slowest_time-speed);
        if (sorted_array[i] > sorted_array[i+1]) {
          setComparing([-1,-1])
          setInorder([i, i+1])
          swap(sorted_array, i, i+1);
          sorted = true;
          setArray(sorted_array);
          await sleep(slowest_time-speed);
        }
        setComparing([-1,-1])
        setInorder([-1,-1]);
        setOrder([i, i+1]);
        await sleep(slowest_time-speed);
      }
    }
    setComparing([-1,-1])
    setInorder([-1,-1])
    setOrder([-1,-1])
    setArray(sorted_array)
}

export { bubbleSort };