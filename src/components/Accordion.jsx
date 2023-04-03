import { useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

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
      <div key={i} className="w-80 border-b border-blue-50">
        <h3
          onClick={() => handleClick(i)}
          className="font-medium py-2 px-3 cursor-pointer transition bg-blue-200 hover:bg-blue-300 flex justify-between"
        >
          {item.label}
          {isOpen ? <MdChevronLeft /> : <MdChevronRight />}
        </h3>
        {isOpen && <p className={"p-3 pt-1"}>{item.contents}</p>}
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
