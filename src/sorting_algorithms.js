const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const swap = (array, num1, num2) => {
  let tmp = array[num1];
  array[num1] = array[num2];
  array[num2] = tmp;
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

export const quickSortWrapper = async (
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
  setSorting(true);
  await quickSort(
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
  );
  setSorting(false);
};

//Source: Coding Train
const quickSort = async (
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
  let minimum_speed = 500;

  setOrder([-1, -1]);
  setComparing([-1, -1]);
  setInOrder([-1, -1]);

  if (start >= end) {
    setOrder([-1, -1]);
    setComparing([-1, -1]);
    setInOrder([-1, -1]);
    return;
  }

  let pivotIndex = start;
  let pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    setOrder([-1, -1]);
    setInOrder([-1, -1]);
    setComparing([i, pivotIndex, end]);
    await sleep(minimum_speed - speed);
    if (arr[i] < pivotValue) {
      setComparing([-1, -1]);
      setInOrder([i, pivotIndex, end]);
      await sleep(minimum_speed - speed);
      swap(arr, i, pivotIndex);
      setArray([...arr]);
      pivotIndex++;
    }
    setComparing([-1, -1]);
    setInOrder([-1, -1]);
    setOrder([i, pivotIndex, end]);
    await sleep(minimum_speed - speed);
  }

  setOrder([-1, -1]);
  setComparing([-1, -1]);
  setInOrder([-1, -1]);
  setInOrder([pivotIndex, end]);
  await sleep(minimum_speed - speed);
  swap(arr, pivotIndex, end);
  setArray([...arr]);
  setInOrder([-1, -1]);
  setOrder([pivotIndex, end]);
  await sleep(minimum_speed - speed);

  setOrder([-1, -1]);
  setComparing([-1, -1]);
  setInOrder([-1, -1]);

  let index = pivotIndex;

  await quickSort(
    arr,
    start,
    index - 1,
    setArray,
    setComparing,
    setInOrder,
    setOrder,
    speed,
    setSorting,
    sorting
  );
  await quickSort(
    arr,
    index + 1,
    end,
    setArray,
    setComparing,
    setInOrder,
    setOrder,
    speed,
    setSorting,
    sorting
  );

  setArray([...arr]);
};

const makeSorted = (iterations) => {
  let arr = [];
  for (let i = 0; i < iterations; i++) {
    arr.push(i);
  }
  return arr;
};

export const insertionSort = async (
  array,
  setArray,
  setComparing,
  setInorder,
  setOrder,
  speed,
  setSorting,
  sorting
) => {
  setOrder([0]);
  let minimum_speed = 500;

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    setComparing([j]);
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      setInorder([j]);
      j--;
      setArray([...array]);
      await sleep(minimum_speed - speed);
    }
    array[j + 1] = key;
    setArray([...array]);
    setComparing([-1]);
    setOrder(makeSorted(i));
    await sleep(minimum_speed - speed);
  }
  setArray([...array]);
  setOrder([-1, -1]);
  setComparing([-1, -1]);
  setInorder([-1, -1]);
  setSorting(false);
};
