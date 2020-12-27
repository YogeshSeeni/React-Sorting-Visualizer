import React from "react";

const checkin = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true;
    }
  }
  return false;
};

const getBarColor = ( index, comparing, inOrder, order) => {
  let yellow = checkin(comparing, index);
  let red = checkin(inOrder, index);
  let green = checkin(order, index);
  
  if (yellow) {
    return "yellow";
  } else if (red) {
    return "red";
  } else if (green) {
    return "green";
  } else {
    return "white"
  }
}

export default function ArrayDisplay(props) {
  const { array, comparing, inOrder, order } = props;

  return (
    <div className="array-display">
      {array.map((number, index) => {
        let bar_color = getBarColor(index, comparing, inOrder, order);
        return (
          <div
            key={index}
            style={{
              background: bar_color,
              height: `${number}vh`,
              width: "1%",
              display: "inline-block",
            }}
          ></div>
        );
      })}
    </div>
  );
}
