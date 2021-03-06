import React, { useState, useLayoutEffect, useEffect, useRef } from "react";

export const Dropdown = props => {
  const { name, title, selected, items, callback } = props;
  const [up, changeUp] = useState(false);
  const [selectedOption, setSelected] = useState(selected);
  const [eventListener, changeEventListener] = useState(false);
  let dropdownHeight = (dropdownHeight = items.length * 32 + 20);
  let list;

  const dropdownRef = useRef(null);

  useLayoutEffect(() => {
    list = document.querySelector(`.${name} .dropdown-list`);
    if (!eventListener) {
      document.addEventListener("mousedown", handleClickOutside);
      changeEventListener(true);
    }
  });

  function handleClickOutside(event) {
    dropdownRef.current && !dropdownRef.current.contains(event.target)
      ? closeDropdown()
      : null;
  }

  const openDropdown = () => {
    if (up) return closeDropdown();

    list.style.height = `${dropdownHeight}px`;
    changeUp(true);
  };

  const closeDropdown = item => {
    list.style.height = `0px`;
    setTimeout(() => {
      changeUp(false);
    }, 200);
    if (item) {
      setSelected(item);
      if (callback) callback(item);
    }
  };

  return (
    <React.Fragment>
      <div
        id="dropdown"
        className={`wrapper ${name}`}
        ref={dropdownRef}
        data-testid="dropdown"
      >
        <div className="dropdown_title">{title}</div>
        <button
          className={up ? "dropdown up" : "dropdown"}
          onClick={openDropdown}
          data-testid="dropdownButton"
        >
          <div className="selected">{selectedOption}</div>
          <div className="chevron"></div>
        </button>
        <div className={up ? "dropdown-list up" : "dropdown-list"}>
          <ul>
            {items.map(item => (
              <li
                data-testid="dropdownButtonOption"
                className={item === selectedOption ? "selected" : null}
                key={item}
                onClick={() => {
                  closeDropdown(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
