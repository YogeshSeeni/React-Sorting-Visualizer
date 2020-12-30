const swap = (array, num1, num2) => {
  let tmp = array[num1];
  array[num1] = array[num2];
  array[num2] = tmp;
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const bubbleSort = async (
  array,
  setArray,
  setComparing,
  setInorder,
  setOrder,
  speed,
  setSorting,
  sorting
) => {
  let sorted_array = [...array];
  let sorted = true;
  const slowest_time = 500;

  while (sorted) {
    sorted = false;
    for (let i = 0; i < sorted_array.length - 1; i++) {
      setOrder([-1, -1]);
      setComparing([i, i + 1]);
      await sleep(slowest_time - speed);
      if (sorted_array[i] > sorted_array[i + 1]) {
        setComparing([-1, -1]);
        setInorder([i, i + 1]);
        swap(sorted_array, i, i + 1);
        sorted = true;
        setArray(sorted_array);
        await sleep(slowest_time - speed);
      }
      setComparing([-1, -1]);
      setInorder([-1, -1]);
      setOrder([i, i + 1]);
      await sleep(slowest_time - speed);
    }
  }
  setComparing([-1, -1]);
  setInorder([-1, -1]);
  setOrder([-1, -1]);
  setSorting(false);
};

export const quickSort = async (
  first,
  arr,
  start,
  end,
  setArray,
  setComparing,
  setInOrder,
  setOrder,
  speed,
  setSorting,
  sorting
) => {
  await quickSort();
  if (start < end) {
    const slowest_time = 500;

    let pivot = arr[start];
    let pointer = start;

    for (let i = start; i < arr.length; i++) {
      setOrder([-1, -1]);
      // await sleep(2000);
      setComparing([i, start, pointer]);
      await sleep(slowest_time - speed);
      if (arr[i] < pivot) {
        setComparing([-1,-1]);
        setInOrder([i, start, pointer]);
        await sleep(slowest_time - speed);

        pointer++;
        swap(arr, pointer, i);
        setArray([...arr]);
      }
      setComparing([-1,-1]);
      setInOrder([-1,-1]);
      setOrder([i, pointer, start]);
      await sleep(slowest_time - speed);
    }

    setComparing([start, pointer]);
    await sleep(slowest_time - speed);
    setComparing([-1,-1]);
    setInOrder([start, pointer]);
    await sleep(slowest_time - speed);
    
    swap(arr, start, pointer);
    setArray([...arr]);

    setInOrder([-1,-1]);
    setOrder([start, pointer]);
    await sleep(slowest_time - speed);
    setOrder([-1,-1]);
    quickSort(
      false,
      arr,
      start,
      pointer,
      setArray,
      setComparing,
      setInOrder,
      setOrder,
      speed,
      setSorting,
      sorting
    );
    quickSort(
      false,
      arr,
      pointer + 1,
      end,
      setArray,
      setComparing,
      setInOrder,
      setOrder,
      speed,
      setSorting,
      sorting
    );
  
    let sorted_array = [...arr];
    setArray(sorted_array);
    setSorting(false);
    return;

  } else {
    return arr;
  }
};
