import React, { useLayoutEffect, useState } from "react";
import "../styles/tab.less";

export const Tab = props => {
  const { items, selectedOption, callback, forwardRef } = props;
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const selected = document.querySelector(`.tabElement.selected`);
    const selectedBorder = document.querySelector(".selected-object");
    if (selected) {
      setLeft(selected.offsetLeft);
      setWidth(selected.offsetWidth);
    }

    selectedBorder.style.left = `${left}px`;
    selectedBorder.style.width = `${width}px`;
  });

  return (
    <div className="tabWrapper" ref={forwardRef}>
      {items.map((item, key) => (
        <div
          className={
            key === selectedOption ? "selected tabElement" : "tabElement"
          }
          onClick={() => callback(key)}
        >
          {item}
        </div>
      ))}
      <div className="selected-object"></div>
    </div>
  );
};
