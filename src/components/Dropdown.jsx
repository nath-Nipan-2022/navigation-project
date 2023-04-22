import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Panal from "./Panal";
// todo: show the dropdown on click - as Like ## input field ##
//! It should not deal with what to do with selectedOption, only pass it to parent

const Dropdown = ({ options, onChange, selectedOption }) => {
  const [isOpened, setIsOpened] = useState(false);

  // get reference of dropdown
  const dropElement = useRef();

  useEffect(() => {
    // handle document clicks
    const handler = (e) => {
      if (!dropElement.current.contains(e.target)) {
        //close dropdown
        setIsOpened(false);
      }
    };
    document.addEventListener("click", handler, true); // true: capture_phase of Events

    //cleanup function runs when component is removed
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  const handleOptionClick = (option) => {
    onChange(option); // what Option is selected ?
  };

  let renderItems = options.map((option, i) => {
    return (
      <Panal
        key={i}
        className="hover:text-blue-700 hover:bg-slate-100"
        onClick={() => handleOptionClick(option)} // Pass the selectedOption
      >
        {option.label}
      </Panal>
    );
  });

  return (
    <div
      ref={dropElement}
      className="w-52 mx-auto pt-6 cursor-pointer"
      // onMouseEnter={() => setIsOpened(true)}
      // onMouseLeave={() => setIsOpened(false)}
      onClick={() => setIsOpened((prev) => !prev)} // toggle the dropdown
    >
      <Panal className="ring-1 ring-slate-400 hover:ring-blue-400 flex items-center justify-between rounded group">
        {selectedOption?.label || "Select..."}
        <MdKeyboardArrowDown className="text-xl transition group-hover:text-blue-500" />
      </Panal>
      {isOpened && (
        <div className="ring-1 ring-slate-300 mt-1.5 flex flex-col divide-y shadow-md overflow-hidden rounded">
          {renderItems}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
