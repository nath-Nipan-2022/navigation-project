import { useState } from "react";
import { MdChevronRight, MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (i) => {
    setExpandedIndex((current) => {
      if (current === i) return null; // if user clicks same accordion
      return i;
    });
  };
  // render items
  const renderItems = items.map((item, i) => {
    let isOpen = expandedIndex === i;

    return (
      <div key={i} className="w-80 border border-gray-400">
        <h3
          onClick={() => handleClick(i)}
          className="font-medium py-2 px-3 cursor-pointer hover:bg-gray-300 flex justify-between"
        >
          {item.label}
          {isOpen ? <MdKeyboardArrowDown /> : <MdChevronRight />}
        </h3>
        {isOpen && (
          <p className={"p-3 pt-1 border-t border-gray-400"}>{item.contents}</p>
        )}
      </div>
    );
  });

  return (
    <div className="m-4 h-screen flex flex-col items-center justify-center">
      {renderItems}
    </div>
  );
};

export default Accordion;
